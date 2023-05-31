import {Link} from 'react-router-dom';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import {AppRoute} from '../../const';
import UserBlock from '../user-block/user-block';
import {useAppSelector} from '../../hooks';

type HeaderProps = {
  title?: string;
  filmName?: string;
}

function Header({title, filmName}: HeaderProps): JSX.Element{
  const {favoriteCount} = useAppSelector((state)=>state);
  return(
    <header className="page-header user-page__head film-card__head">
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {title &&
      <h1 className="page-title user-page__title">{title}
        <span className="user-page__film-count">{favoriteCount}</span>
      </h1>}
      {filmName && <Breadcrumbs filmName={filmName}/>}
      <UserBlock />
    </header>
  );
}

export default Header;
