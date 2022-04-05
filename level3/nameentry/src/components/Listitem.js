import React from 'react';
import {v4 as uuidv4} from 'uuid';

export default function ListItem(props){
    
    return(
        <ol >
           {props.data.map((item) => <li>{item}</li>)}
        </ol>

    )
}