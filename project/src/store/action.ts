import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/film';
import {AuthStatus} from '../components/const';

export const setGenre = createAction<{genre:string}>('films/setGenre');
export const getFilmsByGenre = createAction('films/getFilmsByGenre');
export const incFilmsCount = createAction('films/incFilmsCount');
export const resetFilmsCount = createAction('films/resetFilmsCount');
export const loadFilms = createAction<Films>('data/loadFilms');
export const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');
