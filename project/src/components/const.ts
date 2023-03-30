export enum AppRoute {
  Login = '/login',
  Film = '/films/:id',
  MyList = '/mylist',
  Main = '/',
  Player = '/player/:id',
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

export const GENRES: string[] = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers'
];

export const STAR_COUNT = 10;
