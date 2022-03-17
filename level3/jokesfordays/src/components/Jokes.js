import React from 'react';

export default function Jokes(props) {
    const {setup, punchline, isPun, upvotes, downvotes, comments} = props;
    console.log(props)
    return(<div>
    {setup && <h3>{setup}</h3>}
    <p>{punchline}</p>
    <hr />
    </div>

    )
}