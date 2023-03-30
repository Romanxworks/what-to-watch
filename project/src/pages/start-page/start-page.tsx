import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import ShowMore from '../../components/show-more/show-more';
import FilmsList from '../../components/films-list/films-list';
import FilmDescription from '../../components/film-description/film-description';
import FilmPoster from '../../components/film-poster/film-poster';
import {AuthStatus} from '../../components/const';
import {Film} from '../../types/film';

type StartPageProps = {
  promoFilm: Film;
  films: Film[];
  authStatus: AuthStatus;
}


function StartPage({promoFilm, films, authStatus}:StartPageProps): JSX.Element {
  const {id, name, backgroundImage, genre, released, posterImage} = promoFilm;
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header authStatus={authStatus}/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmPoster poster={posterImage} title={name}/>
            <FilmDescription authStatus={authStatus} title={name} genre={genre} year={released} id={id}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />

          <FilmsList films={films.slice(0,8)}/>

          <ShowMore />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default StartPage;
