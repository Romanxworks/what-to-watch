import {Film} from '../../types/film';
import {FilmDescType} from '../../const';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviewList from '../film-review-list/film-review-list';

type FilmCardDescriptionProps = {
  typeDesc:string;
  film: Film;
}

function FilmCardDescription({typeDesc, film}:FilmCardDescriptionProps): JSX.Element | null{
  let description = <FilmOverview film={film}/>;

  switch(typeDesc) {
    case FilmDescType.Overview:
      description = <FilmOverview film={film}/>;
      break;
    case FilmDescType.Details:
      description = <FilmDetails film={film}/>;
      break;
    case FilmDescType.Reviews:
      description = <FilmReviewList id={film.id}/>;
      break;
  }
  return description;
}

export default FilmCardDescription;
