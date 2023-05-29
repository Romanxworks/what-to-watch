import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import ShowMore from '../../components/show-more/show-more';
import FilmsList from '../../components/films-list/films-list';
import FilmDescription from '../../components/film-description/film-description';
import FilmPoster from '../../components/film-poster/film-poster';
import {AuthStatus} from '../../const';
import {Fragment} from 'react';
import {useAppSelector} from '../../hooks';

function StartPage(): JSX.Element {
  const {filmsByGenre, filmCountPrev, promo, authStatus} = useAppSelector((state) => state);
  const isAuth = authStatus === AuthStatus.Auth;
  return (
    <Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={isAuth ? promo.backgroundImage : 'img/bg-header.jpg'} alt={isAuth ? promo.name : 'gues'} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmPoster poster={promo.posterImage} title={promo.name}/>
            <FilmDescription authStatus={isAuth} film={promo}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmsList films={filmsByGenre.slice(0,filmCountPrev)}/>
          {filmCountPrev < filmsByGenre.length ? <ShowMore /> : ''}
        </section>
        <Footer />
      </div>
    </Fragment>
  );
}

export default StartPage;
