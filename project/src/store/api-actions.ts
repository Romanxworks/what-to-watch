import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {APIRoute, AppRoute, AuthStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {saveToken, dropToken} from '../services/token';
import {Film, Films} from '../types/film.js';
import {
  loadFilms,
  requireAuthorization,
  setError,
  loadSingleFilm,
  setDataLoadedStatus,
  loadSimilarFilms,
  loadReviews,
  loadFavoriteFilms,
  redirectToRoute,
  loadUserData
} from './action';
import {store} from './';
import { Review, Reviews } from '../types/review.js';
import { ReviewData } from '../types/review-data.js';
import { FavoriteData } from '../types/favorite-data.js';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Favorite);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadFavoriteFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchSetFavoriteAction = createAsyncThunk<void, FavoriteData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSetFavorite',
  async ({id,status}, {dispatch, extra: api}) => {
    const {data} = await api.post<Film>(`${APIRoute.Favorite}/${id}/${status}`);
    dispatch(fetchFavoriteFilmsAction());
    dispatch(loadSingleFilm(data));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(`${APIRoute.Films}/${id}${APIRoute.Similar}`);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadSimilarFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadSingleFilm(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchSingleFilmAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSingleFilms',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadSingleFilm(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const addReviewAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/addReview',
  async ({id,comment, rating}, {dispatch, extra: api}) => {
    await api.post<Review>(`${APIRoute.Comments}/${id}`, {rating, comment});
    dispatch(redirectToRoute(`${AppRoute.Film}/${id}`));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadReviews(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(loadUserData(data));
    dispatch(requireAuthorization(AuthStatus.Auth));
    dispatch(fetchFavoriteFilmsAction());
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthStatus.NoAuth));
    dispatch(loadFavoriteFilms([]));
  },
);

