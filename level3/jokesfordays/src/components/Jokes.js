import React,{useState} from 'react';

export default function Jokes(props) {
    const {setup, punchline, isPun, upvotes, downvotes, comments} = props;

    const [isShown, setIsShown] = useState(false)
    function showJoke(){
            setIsShown(prevShown => !prevShown)
    }

 // && is great for display and not display. ternary (line 15) is great for displaying something that is either or
    return(<div>
    {setup && <h3>{setup}</h3>} 
    {isShown && <p>{punchline}</p>}
    <button onClick={showJoke}>{isShown ? "Hide" : "Show"} punchline!</button>
    
    <hr />
    </div>

    )
}

const cond1 = true;
const cond2 = true;

if(cond1 &&  cond2) {
    
}