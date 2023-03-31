import Header from '../../components/header/header';
import FilmPoster from '../../components/film-poster/film-poster';
import ReviewForm from '../../components/review-form/review-form';
import {useParams} from 'react-router-dom';
import {Film} from '../../types/film';

type AddReviewPageProps = {
  films: Film[];
}

function AddReviewPage({films}: AddReviewPageProps): JSX.Element{
  const {id} = useParams();
  const filmById = films.find((film) => film.id === Number(id)) as Film;

  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmById.backgroundImage} alt={filmById.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header filmName={filmById.name} authStatus={false}/>
        <FilmPoster posterSize={'small'} title={filmById.name} poster={filmById.posterImage}/>
      </div>
      <ReviewForm />
    </section>
  );
}

export default AddReviewPage;
