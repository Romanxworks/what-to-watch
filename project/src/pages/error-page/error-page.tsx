import {Link} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../components/const';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function ErrorPage(): JSX.Element {
  return(
    <div className="user-page">
      <Header title='Sign in' authStatus={AuthStatus.NoAuth}/>

      <div className="sign-in user-page__content">
        <h1 className="page-title user-page__title">Ошибка 404. Страница не существует.
          <Link to={AppRoute.Main}> На главную </Link>
        </h1>
      </div>

      <Footer />
    </div>
  );
}

export default ErrorPage;
