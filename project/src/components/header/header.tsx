import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import HeaderTitle from '../header-title/header-title';
import UserBlock from '../user-block/user-block';

type HeaderProps = {
  title?: string;
  filmName?: string;
  count?: number;
  isAuth: boolean;
}

function Header({title, filmName, count, isAuth}: HeaderProps): JSX.Element{
  return(
    <header className="page-header user-page__head film-card__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      {title && <HeaderTitle title={title} count={count}/>}
      {filmName && <Breadcrumbs filmName={filmName}/>}
      {isAuth && <UserBlock />}
    </header>
  );
}

export default Header;
