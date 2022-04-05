import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [friend, setFriend] = useState([])

  const bestFriend = {first: "Luke", last: "skywalker"}


  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe'
  })
  
console.log("person", person)
 
  function addFriends(){
    setFriend(prevFriend => {
      return(
        [...prevFriend, person]
      )
    })
  }


  function addAge(){
    setPerson(prevPerson => {
      return(
        {...prevPerson, firstName:"matt"} 
      )
    })
    
  }


  function changeLastName(){
    setPerson(prevPerson => {
      return(
        {...prevPerson, lastName: "walker", bestFriend}
      )
    })
  }
  

  function addMiddleName(){
    setPerson(prevPerson => {
      return(
        {...prevPerson, middleName: "bethany"}
      )
    })
  }


  return (
    <div className="App">
      <button onClick={addAge}></button>
      <button onClick={changeLastName}>change last name</button>
      <button onClick={addMiddleName}>add middle name</button>
      <button onClick={addFriends}>add friends</button>
    </div>
  );
}

export default App;


   /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */

//QUIZ

// 1. You have 2 options for what you can pass in to a
//    state setter function (e.g. `setCount`). What are they?
   
// a. New value of state (setCount(42))
// b. Callback function - whatever the callback function 
//    returns === new value of state


// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?
// Whenever you don't need the previous value of state to determine
// what the new value of state should be.


// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?
// Whenever you DO need the previous value to determine the new value
