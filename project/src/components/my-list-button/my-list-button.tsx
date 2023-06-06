import { useNavigate } from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useState } from 'react';
import { fetchSetFavoriteAction } from '../../store/api-actions';

function MyListButton(): JSX.Element{
  const {favoriteCount, filmById, authStatus} = useAppSelector((state)=>state);
  const isAuth = authStatus === AuthStatus.Auth;
  const {isFavorite, id} = filmById;
  const [favoriteState, setFavoriteState] = useState<boolean>(isFavorite);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function onFavoriteClickHandler(){
    if(!isAuth){
      navigate(AppRoute.Login);
      return;
    }

    dispatch(fetchSetFavoriteAction({id, status:Number(!isFavorite)}));
    setFavoriteState(!favoriteState);
  }
  return (
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
  );
}

export default MyListButton;
