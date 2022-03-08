// Find the cheapest route
// -Start at the first index of any array in the grid (18, 29, or 8)
// -Traverse from left to right, choosing any row at each step 
//   eg. from 18, you can go to 11, 7, or 22
// -If you switch rows, apply the cost from the costs array at the current index
//   eg. 18 to 11 = 29 (no extra cost),  18 to 7 =  (25 + 5),  18 to 22 = (40 + 5)
//       11 to 6 = 17  (no extra cost),  11 to 24 = (35 + 7),  11 to 7 = (18 + 7)

// Input
// grid: [ [ 18, 11, 6, 30, 27 ],[ 29,7,24,6,6 ], [ 8,22,7,23,21 ] ]
// costs: [ 5, 7, 6, 8 ] 

// row #   
//   1:   18, 11, 6, 30, 27
//   2:   29, 7, 24, 6, 6
//   3:   8, 22, 7, 23, 21

// costs: 5, 7, 6, 8

// eg. answer (row #): [ 3, 1, 1, 2, 2 ]
//            (cost):  8 -> 11 (+5) -> 6 -> 6 (+5) -> 6

// function cheapestRoute(grid, costs){
//    ...
// }

// cheapestRoute([[18, 11, 6, 30, 27],[29,7,24,6,6],[8,22,7,23,21]], [5, 7, 6, 8]) 
// // should return [ 3, 1, 1, 2, 2 ]