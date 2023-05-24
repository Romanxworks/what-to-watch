import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type UserBlockProps = {
  isAuth: boolean;
}

function UserBlock({isAuth}: UserBlockProps): JSX.Element{
  const userLinkText = isAuth ? 'Sign out' : 'Sign in';
  return (
    <ul className="user-block">
      {
        isAuth ?
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li> : ''
      }
      <li className="user-block__item">
        <Link className="user-block__link" to={AppRoute.Login}>{userLinkText}</Link>
      </li>
    </ul>
  );
}

export default UserBlock;
