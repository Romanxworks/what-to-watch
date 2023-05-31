import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';

function UserBlock(): JSX.Element{
  const {authStatus, user} = useAppSelector((state)=>state);
  const isAuth = authStatus === AuthStatus.Auth;
  const userLinkText = isAuth ? 'Sign out' : 'Sign in';
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <ul className="user-block">
      {
        isAuth ?
          <li className="user-block__item" onClick={()=>navigate(AppRoute.MyList)}>
            <div className="user-block__avatar">
              <img src={user?.avatarUrl ?? 'img/avatar.jpg'} alt="User avatar" width="63" height="63" />
            </div>
          </li> : ''
      }
      <li className="user-block__item">
        <Link className="user-block__link" to={AppRoute.Login} onClick={()=>{
          dispatch(logoutAction());
        }}
        >{userLinkText}
        </Link>
      </li>
    </ul>
  );
}

export default UserBlock;
