import React, {useState} from 'react';
import './App.css';

function App() {


//   const [people, setPeople] = useState(
//  [   {
//       firstName: 'John',
//       lastName: 'Smith'
//     }]
//   )

//    function addPerson(){

//      setPeople(prevPerson => [...prevPerson, {firstName: 'Colton', lastName: 'Walker'}])


//    }
   

//   const [friend, setFriend] = useState({
//     firstName: 'Jeff',
//     lastName: 'Conn',
//     age: 30
//   })

//   const [color, setColor] = useState('black')
//  const [something, setSomething] = useState(false)

//   function changeFriend(){


//     setSomething(true)
//     setColor('red')
//     setFriend(prevFriend => ({...prevFriend, age: 31})
//     )}

    



  const colors = ['blue','pink']
  
  const [color, setColor] = useState('blue')

  
   console.log(color)
  function changeColor(){
    
                                              //"?" is "then"  ":" is "else"
    setColor( prevColor => prevColor === 'pink' ? 'blue'  : 'pink');
  
  } 


return (
    <div className="App">
      <div style={{border: '1px solid black', width: '500px', height: '500px', backgroundColor:color}}></div>


    <button onClick={changeFriend}> change Age of Jeff</button>
    <h1 onClick={changeFriend} style={{color}}>{friend.firstName}</h1>
    <h1>{friend.lastName}</h1>
    {!something && <h1>{friend.age}</h1>}
    {/* <button onClick={addPerson}>add person</button> */}
    <button onClick={changeColor}>CHANGE COLOR</button>
    </div>
  );
}

export default App;






  // 4. Change the following state-setting functions to use an implicit return


  // const [colors, setColors] = setState(["pink", "blue"])

  // setColors(prevColors => [...prevColors, "green"])



  // const [countObject, setCountObject] = setState({
  //   count: 0
  // })
  
  // setCountObject(prevState => ({count: prevState.count + 1}))


// 5. Update the following state to add an additional property age and set the value to 30, ensuring that the other properties are not overwritten.

// const [person, setPerson] = useState({
//   firstName: "John",
//   lastName: "Smith"
// })

// const age = 30

// setPerson( prevPerson =>( {...prevPerson, age }))

// OR {...prevPerson, age: 30} 

// 6. What’s wrong with the following state update?

// const [colors, setColors] = useState(["pink", "blue"])

// setColors("green")

// You're not including the previous colors. Then overwriting setColors as a string "green"

