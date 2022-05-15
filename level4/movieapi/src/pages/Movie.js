import React, {useContext, useEffect} from 'react';
import {MovieContext} from '../movieContextProvider';


function Movie(props) {
    const {title, poster_path} = props;

    const {getPopMovies} = useContext(MovieContext);

    useEffect(() => {
        getPopMovies();
    }, []);
  
  return (
    <>
    <div className="popMovie-container">
        <img 
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        width="150px"
        alt=""
        />
        <div>{title}</div>
    </div>
    </>
  )
}

export default Movie