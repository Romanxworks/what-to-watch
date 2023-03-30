import {Link} from 'react-router-dom';
import {AppRoute, GENRES} from '../const';

function GenresList(): JSX.Element{
  const activeClass = 'catalog__genres-item--active';
  return(
    <ul className="catalog__genres-list">
      {GENRES.map((genre, index)=>(
        <li key ={genre} className={`catalog__genres-item 
        ${index === 0 ? activeClass : ''}`}
        >
          <Link to={AppRoute.Main} className="catalog__genres-link">{genre}</Link>
        </li>
      ))}
    </ul>);
}

export default GenresList;
