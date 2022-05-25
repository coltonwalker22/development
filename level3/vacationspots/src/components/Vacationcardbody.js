import React from 'react'
import Vacationcard from './Vacationcard'
import Data from './Data'

export default function Vacationcardbody(){
    
    const vacationcards = Data.map( (item, i) => 
    <Vacationcard 
    key={i}
    {...item}
    />
    )
    
    
    return(
        <>
        <section className="vacationcard-list">
            {vacationcards}
        </section>
    </>
    )
}