import React, {useState, useEffect} from "react"

export default function WindowTracker() {
    /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */
           //   STATE OF WINDOWWIDTH           DEFAULT OF window.innerWidth
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    
     useEffect(() => {
         function watchWidth(){
            setWindowWidth(window.innerWidth)  //in video referred to as a "memory leak"
         }
        window.addEventListener("resize", function() {
                
        })
 /*clean up function*/
 return function() {
        console.log("cleaning up")
        window.removeEventListener("resize", watchWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {window.innerWidth}</h1>
    )
}