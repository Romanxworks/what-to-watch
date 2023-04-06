import { ChangeEvent, FormEvent, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../components/const';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

type SingInPageProps = {
  authStatus: AuthStatus;
}

function SingInPage({authStatus}: SingInPageProps): JSX.Element {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({email:'', password: ''});
  const isAuth = authStatus === AuthStatus.Auth;

  function onChangeFormDataHandle({target}: ChangeEvent<HTMLInputElement>){
    setFormData({...formData, [target.type]:target.value});
  }

  function onSubmitHandle(evt: FormEvent<HTMLFormElement>){
    evt.preventDefault();
    setFormData({email:'', password: ''});
    return navigate(AppRoute.Main);
  }
  return(
    <div className="user-page">
      <Header title='Sign in' authStatus={isAuth}/>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmitHandle}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" value={formData.email} onChange={onChangeFormDataHandle}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" value={formData.password}
                onChange={onChangeFormDataHandle}
              />
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
