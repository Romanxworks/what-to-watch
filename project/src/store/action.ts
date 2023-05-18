import {createAction} from '@reduxjs/toolkit';

export const setGenre = createAction<{genre:string}>('films/setGenre');
export const getFilmsByGenre = createAction('films/getFilmsByGenre');
export const incFilmsCount = createAction('films/incFilmsCount');
export const resetFilmsCount = createAction('films/resetFilmsCount');
