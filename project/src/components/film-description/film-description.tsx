import {Link, useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useState, useEffect } from 'react';
import { fetchFavoriteFilmsAction, fetchSetFavoriteAction } from '../../store/api-actions';
import { Film } from '../../types/film';
import { setFavoritePromo } from '../../store/action';

type FilmDescriptionProps = {
  authStatus: boolean;
  film: Film;
  isPromo?: boolean;
}

function FilmDescription({authStatus, film, isPromo}:FilmDescriptionProps): JSX.Element{
  const {isFavorite, name, genre, released, id} = film;
  const {favoriteCount} = useAppSelector((state)=>state);
  const [favoriteState, setFavoriteState] = useState<boolean>(isFavorite);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(authStatus){
      dispatch(fetchFavoriteFilmsAction());
      setFavoriteState(isFavorite);
    }
  },[dispatch, favoriteCount, isFavorite, authStatus]);

  function onFavoriteClickHandler(){
    if(!authStatus){
      navigate(AppRoute.Login);
    }

    dispatch(fetchSetFavoriteAction({id, status:Number(!isFavorite)}));
    if(isPromo){
      dispatch(setFavoritePromo(!favoriteState));
    }
    setFavoriteState(!favoriteState);
  }

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
        <button className="btn btn--list film-card__button" type="button"
          onClick={onFavoriteClickHandler}
        >
          { isFavorite ?
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg> :
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>}
          <span>My list</span>
          {authStatus ? <span className="film-card__count">{favoriteCount}</span> : null}
        </button>
        {authStatus ? <Link to={`${AppRoute.Film}/${id ?? ''}/${AppRoute.Review}`} className="btn film-card__button">Add review</Link> : null}
      </div>
    </div>
  );
}

export default FilmDescription;
