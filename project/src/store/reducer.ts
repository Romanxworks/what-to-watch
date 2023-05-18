import {createReducer} from '@reduxjs/toolkit';
import {getFilmsByGenre, setGenre} from './action';
import {films} from '../mocks/films';
import {AuthStatus, GENRES} from '../components/const';

const initialState = {
  genre: GENRES[0],
  filmsByGenre: films,
  promo: films[0],
  userStatus: AuthStatus.Auth,
  films,

};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(getFilmsByGenre, (state) => {
      if(state.genre === GENRES[0]){
        state.filmsByGenre = state.films;
        return;
      }
      const filteredFilms = films.filter((film) => film.genre === state.genre);
      state.filmsByGenre = [...filteredFilms];
    });
});

export {reducer};
