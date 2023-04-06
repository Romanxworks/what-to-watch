import {Film} from '../../types/film';
import {getScoreDesc} from '../utils';
import {Fragment} from 'react';
type FilmOverviewProps = {
  film: Film;
}

function FilmOverview({film}: FilmOverviewProps): JSX.Element{
  const {director, scoresCount, starring, rating, description} = film;
  return(
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getScoreDesc(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {starring.join(', ')}</strong></p>
      </div>
    </Fragment>
  );
}

export default FilmOverview;
