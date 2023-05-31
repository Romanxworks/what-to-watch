export enum AppRoute {
  Login = '/login',
  Film = '/films',
  MyList = '/mylist',
  Main = '/',
  Player = '/player',
  Review = 'review'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum FilmDescType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum APIRoute {
  Films = '/films',
  Similar = '/similar',
  Promo = '/promo',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const GENRES: string[] = [
  'All genres',
  'Comedy',
  'Crime',
  'Adventure',
  'Drama',
  'Horror',
  'Fantasy',
  'Romance',
  'Sci-Fi',
  'Thriller'
];

export const STAR_COUNT = 10;
export const FILMS_COUNT_PREV = 8;
export const TIMEOUT_SHOW_ERROR = 2000;
