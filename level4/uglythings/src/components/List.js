import React, {useContext} from 'react'
import {FormContext} from '../formContextProvider'
import Thing from './Thing'




function List() {

    
    const {thingList, deleteThing, editUglyThing} = useContext(FormContext)

    console.log(thingList)

    function updateUglyThing(id, newInput){
      editUglyThing(id, newInput)
    }

    function deleteUglyThing(id){
        deleteThing(id)
    }

  return (
    <div className="list-item">
        {thingList.map(thing => (
        <Thing {...thing} 
        key={thing.title} 
        deleteUglyThing={deleteUglyThing} 
        updateUglyThing={updateUglyThing}
        />
        ))}
    </div>
  )
}

export default List
