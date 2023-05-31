import {Route, Routes} from 'react-router-dom';
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
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const {authStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={
            <StartPage />
          }
          />
          <Route path={AppRoute.MyList} element={
            <PrivateRoute>
              <MyListPage />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Player}/:id`} element={<PlayerPage />}/>
          <Route path={AppRoute.Login} element={<SingInPage />}/>
          <Route path={`${AppRoute.Film}/:id`}>
            <Route index element={<MoviePage />}/>
            <Route path={AppRoute.Review} element={
              <PrivateRoute>
                <AddReviewPage />
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
    </HistoryRouter>
  );
}

export default App;
