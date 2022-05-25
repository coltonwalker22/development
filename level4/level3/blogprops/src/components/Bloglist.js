import React from 'react';
import Blogpost from './Blogpost'
import Data from './Data'



export default function Bloglist(){

    const blogposts = Data.map( (item, i) =>
<Blogpost
key={i}
{...item}
/>
)

    return (
    <>
        <section className="blogpost-list">
            {blogposts}
        </section>
        <div className="button-container">
            <button className="button-olderposts">OLDER POSTS →</button>
        </div>
    </>
    )
}