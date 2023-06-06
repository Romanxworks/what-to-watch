import {createReducer} from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';
import { films } from '../mocks/films';
import {AuthStatus, FILMS_COUNT_PREV, GENRES} from '../const';
import {
  getFilmsByGenre,
  setGenre,
  incFilmsCount,
  resetFilmsCount,
  loadFilms,
  requireAuthorization,
  setError,
  setDataLoadedStatus,
  loadSingleFilm,
  loadSimilarFilms,
  loadReviews,
  loadFavoriteFilms,
  loadUserData,
} from './action';
import {Reviews} from '../types/review';
import { UserData } from '../types/user-data';


type InitialState = {
  genre: string;
  filmsByGenre: Films;
  authStatus: AuthStatus;
  filmCountPrev: number;
  filmById: Film;
  films: Films;
  similarFilms: Films;
  reviews: Reviews;
  favoriteFilms: Films;
  favoriteCount: number;
  error: null | string;
  isDataLoaded: boolean;
  user: UserData | null;
}

const initialState: InitialState = {
  genre: GENRES[0],
  filmsByGenre: [],
  authStatus: AuthStatus.Unknown,
  filmCountPrev: FILMS_COUNT_PREV,
  filmById: films[0],
  films: [],
  similarFilms: [],
  reviews: [],
  favoriteFilms: [],
  favoriteCount: 0,
  error: null,
  isDataLoaded: false,
  user: null,
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
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
      state.favoriteCount = state.favoriteFilms.length;
    })
    .addCase(loadSingleFilm, (state, action) => {
      state.filmById = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.user = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    });
});

export {reducer};
