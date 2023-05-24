import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StartPage from '../../pages/start-page/start-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import SingInPage from '../../pages/sign-in-page/sign-in-page';
import PlayerPage from '../../pages/player-page/player-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import {AppRoute} from '../../const';
import ErrorPage from '../../pages/error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import {isCheckedAuth} from '../utils';

function App(): JSX.Element {
  const {authStatus, isDataLoaded, films, } = useAppSelector((state) => state);

  if (isCheckedAuth(authStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={
            <StartPage
              authStatus={authStatus}
            />
          }
          />
          <Route path={AppRoute.MyList} element={
            <PrivateRoute authStatus={authStatus}>
              <MyListPage myFilms={films.slice(2)} authStatus={authStatus} />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Player}/:id`} element={<PlayerPage films={films}/>}/>
          <Route path={AppRoute.Login} element={<SingInPage authStatus={authStatus}/>}/>
          <Route path={`${AppRoute.Film}/:id`}>
            <Route index element={<MoviePage authStatus={authStatus} films={films}/>}/>
            <Route path={AppRoute.Review} element={
              <PrivateRoute authStatus={authStatus}>
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
