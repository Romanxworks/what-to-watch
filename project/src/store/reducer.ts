import {createReducer} from '@reduxjs/toolkit';
import {
  getFilmsByGenre,
  setGenre,
  incFilmsCount,
  resetFilmsCount,
} from './action';
import {films} from '../mocks/films';
import {AuthStatus, FILMS_COUNT_PREV, GENRES} from '../components/const';

const initialState = {
  genre: GENRES[0],
  filmsByGenre: films,
  promo: films[0],
  userStatus: AuthStatus.Auth,
  filmCountPrev: FILMS_COUNT_PREV,
  films,

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
      const filteredFilms = films.filter((film) => film.genre === state.genre);
      state.filmsByGenre = [...filteredFilms];
    })
    .addCase(incFilmsCount, (state) => {
      state.filmCountPrev += FILMS_COUNT_PREV;
    })
    .addCase(resetFilmsCount, (state) => {
      state.filmCountPrev = FILMS_COUNT_PREV;
    });
});

export {reducer};
