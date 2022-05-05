
import {useNavigate} from 'react-router-dom';
import Movie from '../pages/Movie'

function PopMovies(props) {
  let navigate = useNavigate();

  const {title, poster_path } = props
    
  // const toComponent = () => {
  //     navigate(`/Movie/${title}`);
  //     <Movie 
  //     title={title}
  //     poster_path={poster_path}
  //     />
  //   }

  return (
    <div className="popMovie-component">
        <img 
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        width="150px"
        alt=""
        />
        <div className="popMovie-title">{title}</div>
        {/* <button onClick={() => {toComponent()}}> More Info</button> */}
    </div>
  )
}

export default PopMovies
