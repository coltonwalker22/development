try{
        // try out some code
    // if an error occurs (if an error is thrown)
    if(2 === 2){
        throw new Error("hey I am an error!")
    }
    console.log("did I console log?")
}

catch(err){
    //handle the err
    console.log(err)
} 
finally {
    console.log("I am running no matter what!")
}