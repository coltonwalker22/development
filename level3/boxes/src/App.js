import React, {useState} from 'react';
import Boxes from './components/Boxes'
import Box from './components/Box'

import './App.css';

export default function App() {
  const [squares, setSquares] = React.useState(Boxes)
  
//   function toggle(id) {
//     setSquares(prevSquares => {
//         return prevSquares.map((square) => {
//           return square.id === id ? {...square, on: !square.on} : square
//         })
//     })
// }
  
  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
    })
  })
}
  const squareElements = squares.map(square => (
      <Box 
          key={square.id} 
          id={square.id}
          on={square.on} 
          toggle={toggle}
      />
  ))
  
  return (
      <main>
          {squareElements}
      </main>
  )
}



// function toggle(id) {
//   setSquares(prevSquares => {
//       const newSquares = []
//       for(let i = 0; i < prevSquares.length; i++) {
//           const currentSquare = prevSquares[i]
//           if(currentSquare.id === id) {
//               const updatedSquare = {
//                   ...currentSquare,
//                   on: !currentSquare.on
//               }
//               newSquares.push(updatedSquare)
//           } else {
//               newSquares.push(currentSquare)
//           }
//       }
//       return newSquares
//   })
// }