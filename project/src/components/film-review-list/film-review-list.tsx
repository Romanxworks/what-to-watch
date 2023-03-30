import {Review} from '../../types/review';
import FilmReview from '../film-review/film-review';

type FilmReviewListProps = {
  reviews: Review[];
}

function FilmReviewList({reviews}: FilmReviewListProps): JSX.Element{
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.map((review) => <FilmReview review={review} key={review.id}/>)
        }
      </div>
    </div>
  );
}

export default FilmReviewList;
