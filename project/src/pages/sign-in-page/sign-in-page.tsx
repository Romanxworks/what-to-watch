import {useNavigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../components/const';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

type SingInPageProps = {
  authStatus: AuthStatus;
}


function SingInPage({authStatus}: SingInPageProps): JSX.Element {
  const navigate = useNavigate();
  return(
    <div className="user-page">
      <Header title='Sign in' authStatus={authStatus}/>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={()=>navigate(AppRoute.Main)}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SingInPage;
