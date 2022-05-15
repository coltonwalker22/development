import React, {useContext, useEffect} from 'react'
import {MovieContext} from '../movieContextProvider';
import {useNavigate} from 'react-router-dom';

import PopMoviesComponent from '../components/PopMoviesComponent'
import NowPlayingComponent from '../components/NowPlayingComponent'
import TopMoviesComponent from '../components/TopMoviesComponent'



function Home() {
    let navigate = useNavigate();

    const {popMovies, getPopMovies, nowPlaying, topMovies, getNowPlaying, getTopMovies, searchMovies, getSearchedMovies} = useContext(MovieContext);

    console.log("popMovies:",popMovies)
    console.log("nowPlaying:",nowPlaying)
    console.log("topMovies:", topMovies)
    console.log("searchMovies:", searchMovies)
    
    useEffect(() => {
        getPopMovies();
        getNowPlaying();
        getTopMovies();
        // getSearchedMovies();
    }, []);

const colors = "red"
  
    return (
        <>
        <div className="first-row-container">
            <div className="popular-container">
                <h1>POPULAR MOVIES</h1>
                {popMovies.slice(0,4).map(pm => <PopMoviesComponent {...pm} key={pm.id} />
                )}
                <button 
                onClick={() => {navigate("/popular")
                }} 
                >
                See More!</button> 
            </div>

            <div className="nowPlaying-container">
                <h1> NOW PLAYING</h1>
                {nowPlaying.slice(0,4).map(pm => <NowPlayingComponent {...pm} key={pm.id}
                />
                )}
                  <button 
                    className="nowPlaying-button"
                onClick={() => {navigate("/NowPlaying")
                }} 
                >
                See More!</button> 
            </div>

            <div className="topRated-container">
                <h1>TOP RATED</h1>
            {topMovies.slice(0,4).map(pm => <TopMoviesComponent {...pm} key={pm.id}
                />
                )}
                  <button 
                onClick={() => {navigate("/TopMovies")
                }} 
                >
                See More!</button> 
            </div>
        </div>
        </>
        
        

  )
}

export default Home



//TO DO

// DO CSS FOR TOP RATED. do grid-template-area so that the top rated section can sit underneath popular movies.
// CREATE THE TOP RATED PAGE. so that the list of 20 top rated movies can be seen.
//  CSS DESIGN THE HOME AND OTHER PAGES. needs to be better looking.
// FIGURE OUT THE SEARCH ABILITY. getting 403. something wrong with the get request is being called.
