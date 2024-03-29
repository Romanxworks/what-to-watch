import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function ErrorPage(): JSX.Element {
  return(
    <div className="user-page">
      <Header />
      <div className="sign-in user-page__content">
        <h1 className="sign-in__message">Упсс... Страница не существует.<br/>
          <Link to={AppRoute.Main}> На главную </Link>
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
