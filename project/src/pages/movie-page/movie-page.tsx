import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import FilmCardNav from '../../components/film-card-nav/film-card-nav';
import FilmOverview from '../../components/film-overview/film-overview';
import FilmPoster from '../../components/film-poster/film-poster';
import FilmDescription from '../../components/film-description/film-description';

function MoviePage(): JSX.Element{
  return(
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header isAuth/>
          <div className="film-card__wrap">
            <FilmDescription title={'test'} genre={'horror'} year={'2015'} id={2}/>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmPoster posterSize={'big'}/>
            <div className="film-card__desc">
              <FilmCardNav />
              <FilmOverview />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
