import React, {useState} from 'react';


export default function Savedmeme({randomImage, topText, bottomText, savedMemes, setMemes, id} ){


    const [editMode, setEditMode] = useState(false)



    function editMeme(){
        setEditMode(true) 
    }

    function saveMeme(event){
        event.preventDefault();
        let topText = document.getElementById('topText').value;
        let bottomText = document.getElementById('bottomText').value;

        let editedMeme = savedMemes.find(meme => meme.id === id);
        editedMeme.topText = topText; editedMeme.bottomText = bottomText;
        setMemes([...savedMemes])
        setEditMode(false);


    }


    function deleteMeme(){
       setMemes((prevMeme) => prevMeme.filter(meme => meme.id !== id));
    }


    return(
        <div className="savedmeme-container">
            <div className="meme">
                <img src={randomImage || ""} className="meme--image" alt="" />
                <h2 className="meme-text top">{topText || ""}</h2>
                <h2 className="meme-text bottom">{bottomText || ""}</h2>
            </div>
                {editMode 
                ? <div className="edit-container">
                <input 
                className="edit-topText"
                placeholder={topText}
                id="topText"
                /> 
                <input 
                className="edit-bottomText"
                placeholder={bottomText}
                id="bottomText"
                />
                <div className="edit-savebutton" onClick={saveMeme}>Save</div>
                </div> 
                : null}
        
        <div className="meme-buttons">
        <div onClick={editMeme} className="savedmeme-edit">Edit</div>
        <div onClick={deleteMeme} className="savedmeme-delete">Delete</div>
        </div>
        {/* <div onClick={deleteMeme} style={{backgroundColor:"brown"}}>delete</div> */}
        </div>
    )
}