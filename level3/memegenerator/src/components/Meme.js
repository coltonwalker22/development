import React, {useState, useEffect} from 'react';
import Savedmeme from "./Savedmeme";
import {v4 as uuidv4} from 'uuid';

// import memesData from '../memeData.js'

export default function Meme(){
    // this useState below is the "default" object when loading the page.
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://localhost:3000//1bij.jpg",

    })

    //below is a useState to hold all the memes in a array when pulled from the API to use in the function getMemeImage()
    const [allMemes, setAllMemes] = useState([])
    
    //this useState is an empty  array where we will store the memes we have created
    const [savedMemes, setSavedMemes] = useState([])

    //useEffect is used to get an API that has the images and taking the data to put in "setAllMemes" accesing data => to get the data in the array, objects called memes
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    //this function allows us to get the meme(url) from the API, but randomizes the data to get a random image each time button is clicked
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    // handleChange "targets" the name and vlue in the SetMeme/meme such as topText and bottomText with [name]: value
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function saveMeme(event){
        event.preventDefault()
        setSavedMemes(prevMemes => [
            ...prevMemes,
                 {...meme, 
                id:uuidv4()},
                ])
    }

    // "***.map is not a function = object is not an array"

    return(
        <main>
            <div className="form">
                
                <input 
                type="text" 
                className="form-input" 
                placeholder="top text"
                value={meme.topText}
                onChange={handleChange}
                name="topText"
                />
                <input 
                type="text" 
                className="form-input" 
                placeholder="bottom text"
                value={meme.bottomText}
                onChange={handleChange}
                name="bottomText"
                />
                <div className="break"></div>
                <button onClick={getMemeImage} className="form-button"> Get a new meme image 🖼</button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        <button onClick={saveMeme}
        className="save-button">Save Meme</button>
        <div>
       {savedMemes.map((item, index) => <Savedmeme {...item} savedMemes={savedMemes} setMemes={setSavedMemes} index={index} key={uuidv4()}/>)}
        </div>

        </main>
    )
}





    /**
useEffect takes a function as its parameter. If that function
returns something, it needs to be a cleanup function. Otherwise,
it should return nothing. If we make it an async function, it
automatically retuns a promise instead of a function or nothing.
Therefore, if you want to use async operations inside of useEffect,
you need to define the function separately inside of the callback
function, as seen below:
*/


    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMeme()
    // }, [])