import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import { useAppSelector } from '../../hooks';
import MyListButton from '../my-list-button/my-list-button';

function FilmDescription(): JSX.Element{
  const {filmById, authStatus} = useAppSelector((state)=>state);
  const isAuth = authStatus === AuthStatus.Auth;
  const {name, genre, released, id} = filmById;
  const navigate = useNavigate();

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{released}</span>
      </p>

      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button" type="button"
          onClick={()=> navigate(`${AppRoute.Player}/${id ?? ''}`)}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <MyListButton />
        {isAuth ? <Link to={`${AppRoute.Film}/${id ?? ''}/${AppRoute.Review}`} className="btn film-card__button">Add review</Link> : null}
      </div>
    </div>
  );
}

export default FilmDescription;
