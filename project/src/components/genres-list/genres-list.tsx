import {Link} from 'react-router-dom';
import {AppRoute, GENRES} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setGenre } from '../../store/action';

function GenresList(): JSX.Element{
  const activeClass = 'catalog__genres-item--active';
  const genreType = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  return(
    <ul className="catalog__genres-list">
      {GENRES.map((genre)=>(
        <li key ={genre} className={`catalog__genres-item 
        ${genre === genreType ? activeClass : ''}`}
        >
          <Link to={AppRoute.Main} className="catalog__genres-link" onClick={(evt)=>{
            evt.preventDefault();
            dispatch(setGenre(evt.currentTarget.innerText));
          }}
          >{genre}
          </Link>
        </li>
      ))}
    </ul>);
}

export default GenresList;
