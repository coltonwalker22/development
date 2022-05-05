import React, {useState, useEffect} from 'react';
import axios from 'axios'

const PlumbingContext = React.createContext();

function PlumbingContextProvider(props){

const [serviceList, setServiceList] = useState([])



    

    // GET API
    useEffect(() => {
        axios.get('https://api.vschool.io/coltonplumbing/thing')
                    .then(res => setServiceList(res.data))
                    .catch(err => console.log(err))
    }, [])


    // POST API
    function postServices(thing){
        axios.post('https://api.vschool.io/coltonplumbing/thing/', thing)
            .then(res => setServiceList(prevList => ([...prevList, res.data])))
            .catch(err => console.log(err))
    }
    
    return(
         <PlumbingContext.Provider value={{
            serviceList,
            setServiceList,
            postServices
         }}>
        {props.children}
         </PlumbingContext.Provider>
    )

}

export {PlumbingContextProvider, PlumbingContext }