import {Link} from 'react-router-dom';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import {AppRoute, AuthStatus} from '../../const';
import HeaderTitle from '../header-title/header-title';
import UserBlock from '../user-block/user-block';
import { useAppSelector } from '../../hooks';

type HeaderProps = {
  title?: string;
  filmName?: string;
}

function Header({title, filmName}: HeaderProps): JSX.Element{
  const {authStatus, favoriteCount} = useAppSelector((state)=>state);
  const isAuth = authStatus === AuthStatus.Auth;
  return(
    <header className="page-header user-page__head film-card__head">
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {title && <HeaderTitle title={title} count={favoriteCount}/>}
      {filmName && <Breadcrumbs filmName={filmName}/>}
      <UserBlock isAuth={isAuth} />
    </header>
  );
}

export default Header;
