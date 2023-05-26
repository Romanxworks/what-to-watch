import {createAction} from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';
import {AuthStatus} from '../const';

export const setGenre = createAction<string>('films/setGenre');
export const getFilmsByGenre = createAction('films/getFilmsByGenre');
export const incFilmsCount = createAction('films/incFilmsCount');
export const resetFilmsCount = createAction('films/resetFilmsCount');

export const loadFilms = createAction<Films>('data/loadFilms');
export const loadSimilarFilms = createAction<Films>('data/loadSimilarFilms');
export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');
export const loadSingleFilm = createAction<Film>('data/loadSingleFilm');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('app/setError');

