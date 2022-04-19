import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FormContext = React.createContext();

function FormContextProvider(props){

    const [thingList, setThingList] = useState([])

    const [ newInput, setNewInput] = useState({
        title: "",
        description: ""
    })

   console.log(thingList)


    //POST API
   function postUglyThing(thing){

    axios.post(`https://api.vschool.io/coltonwalker/thing/`, thing)
                .then(res =>setThingList(prevList => ([...prevList, res.data])))
                .catch(err => console.log(err))
                

   }


    //GET API
    useEffect(() => {
        axios.get('https://api.vschool.io/coltonwalker/thing')
                // .then(res => res.json())
                .then(res => setThingList(res.data))
                .catch(err => console.log(err))
    }, [])

    //EDIT API

    function editUglyThing(id, newInput){
        let update = {
            title: newInput.title,
            description: newInput.description
        }
        axios.put(`https://api.vschool.io/coltonwalker/thing/${id}`,update)
            .then(res =>  console.log(res.data))
            .catch(err => console.log(err))
            setThingList(prevList => prevList.map(item => (item._id === id ? 
            {...item, title: newInput.title, description: newInput.description} : item)))

    }

    //DELETE API

    function deleteThing(id){

        axios.delete(`https://api.vschool.io/coltonwalker/thing/${id}`)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
                setThingList(thingList.filter(listItem => ( listItem._id !== id)))

    }
   

    return(
        <FormContext.Provider value={{
            thingList,
            newInput, 
            setNewInput,
            setThingList,
            postUglyThing,
            deleteThing,
            editUglyThing
            }}>
            {props.children}
        </FormContext.Provider>
    )
}


export {FormContextProvider, FormContext}