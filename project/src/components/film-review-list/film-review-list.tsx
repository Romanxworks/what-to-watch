import FilmReview from '../film-review/film-review';

function FilmReviewList(): JSX.Element{
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <FilmReview />
      </div>
    </div>
  );
}

export default FilmReviewList;
