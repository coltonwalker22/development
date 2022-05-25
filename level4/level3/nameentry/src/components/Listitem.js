import React from 'react';
import {v4 as uuidv4} from 'uuid';

export default function ListItem(props){
    
    return(
    <div className="list">
        <ol className="list-item">
           {props.data.map((item) => <li className="item">{item}</li>)}
        </ol>
    </div>

    )
}