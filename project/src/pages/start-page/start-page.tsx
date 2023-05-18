import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import ShowMore from '../../components/show-more/show-more';
import FilmsList from '../../components/films-list/films-list';
import FilmDescription from '../../components/film-description/film-description';
import FilmPoster from '../../components/film-poster/film-poster';
import {AuthStatus} from '../../components/const';
import {Fragment} from 'react';
import {useAppSelector} from '../../hooks';

type StartPageProps = {
  authStatus: AuthStatus;
}

function StartPage({authStatus}:StartPageProps): JSX.Element {
  const films = useAppSelector((state) => state.filmsByGenre);
  const promoFilm = useAppSelector((state) => state.promo);
  const filmCount = useAppSelector((state) => state.filmCountPrev);

  const isAuth = authStatus === AuthStatus.Auth;
  const {id, name, backgroundImage, genre, released, posterImage} = promoFilm;
  return (
    <Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={isAuth ? backgroundImage : 'img/bg-header.jpg'} alt={isAuth ? name : 'gues'} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header authStatus={isAuth}/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmPoster poster={posterImage} title={name}/>
            <FilmDescription authStatus={isAuth} title={name} genre={genre} year={released} id={id}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmsList films={films.slice(0,filmCount)}/>
          {filmCount < films.length ? <ShowMore /> : ''}
        </section>
        <Footer />
      </div>
    </Fragment>
  );
}

export default StartPage;
