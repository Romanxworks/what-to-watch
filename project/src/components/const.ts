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

export const GENRES: string[] = ['All genres',
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