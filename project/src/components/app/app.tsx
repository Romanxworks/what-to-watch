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
import {Film} from '../../types/film';

type AppProps = {
  films: Film[];
}

function App({films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={
            <StartPage
              authStatus={AuthStatus.NoAuth}
              promoFilm={films[0]}
              films={films}
            />
          }
          />
          <Route path={AppRoute.MyList} element={
            <PrivateRoute authStatus={AuthStatus.NoAuth}>
              <MyListPage myFilms={films.slice(2)} authStatus={AuthStatus.NoAuth} />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Player}/:id`} element={<PlayerPage />}/>
          <Route path={AppRoute.Login} element={<SingInPage authStatus={AuthStatus.NoAuth}/>}/>
          <Route path={`${AppRoute.Film}/:id`}>
            <Route index element={<MoviePage authStatus={AuthStatus.NoAuth} films={films}/>}/>
            <Route path={AppRoute.Review} element={
              <PrivateRoute authStatus={AuthStatus.NoAuth}>
                <AddReviewPage films={films}/>
              </PrivateRoute>
            }
            />
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
