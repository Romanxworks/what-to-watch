import StartPage from '../../pages/start-page/start-page';
// import MoviePage from '../../pages/movie-page/movie-page';
type AppProps = {
  title: string;
  genre: string;
  year: string;
}

function App({title, genre, year}: AppProps): JSX.Element {
  return (<StartPage title={title} genre={genre} year={year}/>);
}

export default App;
