import React from 'react'

function TopMoviesComponent(props) {
    const {title, poster_path} = props
  return (
    <div className="topRated-component">
    <img 
    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
    width="150"
    alt=""
    />
    <div className="topRated-title">{title}</div>
</div>
  )
}

export default TopMoviesComponent