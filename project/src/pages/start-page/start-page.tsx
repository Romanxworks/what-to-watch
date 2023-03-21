import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import ShowMore from '../../components/show-more/show-more';
import FilmsList from '../../components/films-list/films-list';
import FilmDescription from '../../components/film-description/film-description';
import FilmPoster from '../../components/film-poster/film-poster';

type StartPageProps = {
  title: string;
  genre: string;
  year: string;
}


function StartPage({title, genre, year}:StartPageProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header isAuth/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmPoster />
            <FilmDescription isMain title={title} genre={genre} year={year} id={2}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />

          <FilmsList />

          <ShowMore />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default StartPage;
