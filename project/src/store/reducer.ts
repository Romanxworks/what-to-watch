import {createReducer} from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';
import {AuthStatus, FILMS_COUNT_PREV, GENRES} from '../components/const';
import {
  getFilmsByGenre,
  setGenre,
  incFilmsCount,
  resetFilmsCount,
  loadFilms,
  requireAuthorization,
} from './action';


type InitialState = {
  genre: string;
  filmsByGenre: Films;
  promo: Film | null;
  authStatus: AuthStatus;
  filmCountPrev: number;
  films: Films;
}

const initialState: InitialState = {
  genre: GENRES[0],
  filmsByGenre: [],
  promo: null,
  authStatus: AuthStatus.Unknown,
  filmCountPrev: FILMS_COUNT_PREV,
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
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
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    });
});

export {reducer};
