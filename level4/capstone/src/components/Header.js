// import React, {useContext} from 'react';
// import {MovieContext} from '../movieContextProvider';
// import {useNavigate} from 'react-router-dom'
// import SearchedComponent from '../components/SearchedComponent';
// import axios from 'axios';


function Header(props) {

  // let navigate = useNavigate();

  // const {searchMovies, setSearchMovies, /*getSearchedMovies*/ topMovies} = useContext(MovieContext);

// const [APIData, setAPIData] = useState([]);
//   const [filteredResults, setFilteredResults] = useState([]);
//   const [searchInput, setSearchInput] = useState('');

//   useEffect(() => {
//     getSearchedMovies();
//   }, [])

//   function getSearchedMovies(){
//     return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB}&region=US&query=${setSearchInput}`)
//     .then( ({data: {results}}) => setSearchMovies(results))
//     .catch(err => console.log(err))
// }


// const searchItems = (searchValue) => {
//   setSearchInput(searchValue)
//   if(searchInput !== '') {
//     const filteredData = APIData.filter((item) => {
//       return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
//     })
//     setFilteredResults(filteredData)
//   }
//   else{
//     setFilteredResults(APIData)
//   }
// }






  return (
  <div className="header-container">
    <h1> MOVIES FTW</h1>
    <input
    icon='search'
    // onChange={(e) => searchItems(e.target.value)}
    ></input>
    {/* <button onClick={() => {navigate("/Searched")}}>search</button> */}
    
    
  </div>
  )
}

export default Header



  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue);
  //   if(searchInput !== "") {
  //     const filteredData = searchMovies.filter((item) => {
  //       return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  //     })
  //     setFilteredMovies(filteredData)
  //   }
  //   else{
  //     setFilteredMovies(searchMovies)
  //   }
  // }


  // function searchItems(searchMovies) {
  //   const filteredMovies = searchMovies.filter(movie => {
  //   if( movie.adult === false){
  //     return filteredMovies
  //     } else {
  //       console.log("searchItems does not work")
  //     }
  //   })
  // }

//   function getSearchedMovies(){
//     return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB}&region=US&query=${}`)
//     .then( ({data: {results}}) => setSearchMovies(results))
//     .catch(err => console.log(err))
// }