import StartPage from '../../pages/start-page/start-page';
// import MoviePage from '../../pages/movie-page/movie-page';
type AppProps = {
  isMain: boolean;
  title: string;
  genre: string;
  year: string;
}

function App({isMain, title, genre, year}: AppProps): JSX.Element {
  return (<StartPage title={title} genre={genre} year={year} isMain={isMain}/>);
}

export default App;
