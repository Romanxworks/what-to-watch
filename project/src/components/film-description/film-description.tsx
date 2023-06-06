import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useState, useEffect } from 'react';
import { fetchFavoriteFilmsAction, fetchSetFavoriteAction } from '../../store/api-actions';

function FilmDescription(): JSX.Element{
  const {favoriteCount, filmById, authStatus} = useAppSelector((state)=>state);
  const isAuth = authStatus === AuthStatus.Auth;
  const {isFavorite, name, genre, released, id} = filmById;
  const [favoriteState, setFavoriteState] = useState<boolean>(isFavorite);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(isAuth){
      dispatch(fetchFavoriteFilmsAction());
      setFavoriteState(isFavorite);
    }
  },[dispatch, isFavorite, isAuth]);

  function onFavoriteClickHandler(){
    if(!isAuth){
      navigate(AppRoute.Login);
      return;
    }

    dispatch(fetchSetFavoriteAction({id, status:Number(!isFavorite)}));
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
          {isAuth ? <span className="film-card__count">{favoriteCount}</span> : null}
        </button>
        {isAuth ? <Link to={`${AppRoute.Film}/${id ?? ''}/${AppRoute.Review}`} className="btn film-card__button">Add review</Link> : null}
      </div>
    </div>
  );
}

export default FilmDescription;
