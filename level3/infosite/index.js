import React from "react"
// import ReactDOM from "react-dom"
/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const page = (
    <div>
        <h1> my awesome website in React</h1>
        <h3>reasons I love gutiar</h3>
        <ol>
            <li>difficult</li>
            <li>freedom of expression</li>
            <li>pedals make it interesting</li>
        </ol>
    </div>

)

// document.getElementById("root").append(JSON>stringify(page))
ReactDOM.render(navBar, document.getElementById("root"))