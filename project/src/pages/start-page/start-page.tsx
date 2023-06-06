import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import ShowMore from '../../components/show-more/show-more';
import FilmsList from '../../components/films-list/films-list';
import FilmDescription from '../../components/film-description/film-description';
import FilmPoster from '../../components/film-poster/film-poster';
import {AuthStatus} from '../../const';
import {Fragment, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchPromoFilmAction} from '../../store/api-actions';

function StartPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);
  const {filmsByGenre, filmCountPrev, filmById, authStatus} = useAppSelector((state) => state);
  const isAuth = authStatus === AuthStatus.Auth;
  return (
    <Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={isAuth ? filmById.backgroundImage : 'img/bg-header.jpg'} alt={isAuth ? filmById.name : 'gues'} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmPoster poster={filmById.posterImage} title={filmById.name}/>
            <FilmDescription />
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
