import {createReducer} from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';
import {AuthStatus, FILMS_COUNT_PREV, GENRES} from '../const';
import {
  getFilmsByGenre,
  setGenre,
  incFilmsCount,
  resetFilmsCount,
  loadFilms,
  requireAuthorization,
  loadPromoFilm,
  setError,
  setDataLoadedStatus,
} from './action';


type InitialState = {
  genre: string;
  filmsByGenre: Films;
  promo: Film | null;
  authStatus: AuthStatus;
  filmCountPrev: number;
  films: Films;
  error: null | string;
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  genre: GENRES[0],
  filmsByGenre: [],
  promo: null,
  authStatus: AuthStatus.Unknown,
  filmCountPrev: FILMS_COUNT_PREV,
  films: [],
  error: null,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
      state.filmCountPrev = FILMS_COUNT_PREV;
    })
    .addCase(getFilmsByGenre, (state) => {
      if(state.genre === GENRES[0]){
        state.filmsByGenre = state.films;
        return;
      }
      const filteredFilms = state.films.filter((film) => film.genre === state.genre);
      state.filmsByGenre = filteredFilms;
    })
    .addCase(incFilmsCount, (state) => {
      state.filmCountPrev += FILMS_COUNT_PREV;
    })
    .addCase(resetFilmsCount, (state) => {
      state.filmCountPrev = FILMS_COUNT_PREV;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsByGenre = action.payload;
      state.films = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    });
});

export {reducer};
