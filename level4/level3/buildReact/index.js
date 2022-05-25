import React from "react"
// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// let thing = document.createElement("h1")
// thing.textContent = "hello Vanilla!"
// thing.className = "header"
// document.getElementById("root").append(thing)

// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)
// console.log(h1)

// //JSX

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

// ReactDOM.render(element, document.getElementById("root"))

// const navBar = (
//     <nav>
//         <h1> AwesomeSauce!</h1>
//             <ul>
//             <li>pricing</li>
//             <li>about</li>
//             <li>contact</li>
//             </ul>
//     </nav>
// )

// ReactDOM.render(navBar, document.getElementById("root"))


const navBar = (
    <nav>
        <ul>
         <h1>awesomesauce!</h1>
         <li>menu</li>
         <li>pricing</li> 
         <li>about</li> 
        </ul>
    </nav>
)

ReactDOM.render(navBar, document.getElementById("root"))