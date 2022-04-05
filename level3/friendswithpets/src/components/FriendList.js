import React from 'react';
import Friendcard from './Friendcard'
import Data from './Data'





export default function FriendList(){
    
    const friendlistcards = Data.map( (item, i)=>
    <Friendcard
    key={i}
    {...item}
    />
    )
    return(
    <section className="friendlist-container">
            {friendlistcards}
    </section>
    
    )
}
