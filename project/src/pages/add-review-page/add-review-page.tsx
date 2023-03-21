import Header from '../../components/header/header';
import FilmPoster from '../../components/film-poster/film-poster';
import ReviewForm from '../../components/review-form/review-form';

function AddReviewPage(): JSX.Element{
  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header filmName='The Grand Budapest Hotel' isAuth/>
        <FilmPoster posterSize={'small'}/>
      </div>
      <ReviewForm />

    </section>
  );
}

export default AddReviewPage;
