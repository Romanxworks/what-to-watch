import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StartPage from '../../pages/start-page/start-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import SingInPage from '../../pages/sign-in-page/sign-in-page';
import PlayerPage from '../../pages/player-page/player-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import {AppRoute, AuthStatus} from '../const';
import ErrorPage from '../../pages/error-page/error-page';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  title: string;
  genre: string;
  year: string;
}

function App({title, genre, year}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<StartPage title={title} genre={genre} year={year}/>}/>
          <Route path={AppRoute.MyList} element={
            <PrivateRoute authStatus={AuthStatus.NoAuth}>
              <MyListPage />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Player}/:id`} element={<PlayerPage />}/>
          <Route path={AppRoute.Login} element={<SingInPage />}/>
          <Route path={AppRoute.Film}>
            <Route index element={<MoviePage />}/>
            <Route path={AppRoute.Review} element={<AddReviewPage />}/>
          </Route>
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
