function anagram(str, strb) {
    if(str.length !== strb.length){
        return false
    } 
    for() => str.indexof() === strb

    /*
    for(let i=0; i<str.length; i++) {
        strb.indexof(str[i]) // this will return either the index of the existing letter, else return -1
        // cut that letter out of strb


    }

    // if strb is empty then return true

    */

    /* 
     f i n d e r 

     f => 0
     i -> 2
     n -> 4
     d -> 5 
     e -> 


    */


     /*
     
     another way of solving: 
     // sort both strings
     // check equivalency

     */

     /* 
     use an object to store the counts for each letter

     const obj = {
        "f": 1
        "i": 1
     }

     // loop through 1st string 
     // keep a count of all the letter occurrences of each letter


     // loop through 2nd string 
     // if the current letter exists inside of the object, decrement the count 
     */

 }

 
 
 // test data
 console.log(anagram('finder', 'friind'))  // true 
 console.log(anagram('hello', 'bye')) // false
 