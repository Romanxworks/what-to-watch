import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StartPage from '../../pages/start-page/start-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import SingInPage from '../../pages/sign-in-page/sign-in-page';
import PlayerPage from '../../pages/player-page/player-page';
import MyListPage from '../../pages/my-list-page/my-list-page';

type AppProps = {
  title: string;
  genre: string;
  year: string;
}

function App({title, genre, year}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<StartPage title={title} genre={genre} year={year}/>}/>
          <Route path='/mylist' element={<MyListPage />}/>
          <Route path='/player/:id' element={<PlayerPage />}/>
          <Route path='/login' element={<SingInPage />}/>
          <Route path='films/:id/'>
            <Route index element={<MoviePage />}/>
            <Route path='review' element={<AddReviewPage />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
