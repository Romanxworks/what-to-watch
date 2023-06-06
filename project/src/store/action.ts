import {createAction} from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';
import {AppRoute, AuthStatus} from '../const';
import { Reviews } from '../types/review';
import { UserData } from '../types/user-data';

export const setGenre = createAction<string>('films/setGenre');
export const incFilmsCount = createAction('films/incFilmsCount');
export const resetFilmsCount = createAction('films/resetFilmsCount');

export const loadFilms = createAction<Films>('data/loadFilms');
export const loadFavoriteFilms = createAction<Films>('data/loadFavoriteFilms');
export const loadSimilarFilms = createAction<Films>('data/loadSimilarFilms');
export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');
export const loadSingleFilm = createAction<Film>('data/loadSingleFilm');
export const loadReviews = createAction<Reviews>('data/loadReviews');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');
export const loadUserData = createAction<UserData>('user/loadUserData');

export const setError = createAction<string | null>('app/setError');
export const redirectToRoute = createAction<AppRoute|string>('app/redirectToRoute');

