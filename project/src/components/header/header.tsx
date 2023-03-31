import {Link} from 'react-router-dom';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import {AppRoute} from '../const';
import HeaderTitle from '../header-title/header-title';
import UserBlock from '../user-block/user-block';

type HeaderProps = {
  title?: string;
  filmName?: string;
  count?: number;
  authStatus: boolean;
}

function Header({title, filmName, count, authStatus}: HeaderProps): JSX.Element{
  return(
    <header className="page-header user-page__head film-card__head">
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {title && <HeaderTitle title={title} count={count}/>}
      {filmName && <Breadcrumbs filmName={filmName}/>}
      <UserBlock isAuth={authStatus} />
    </header>
  );
}

export default Header;
