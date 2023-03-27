import { FilmDescType } from '../const';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviewList from '../film-review-list/film-review-list';

type FilmCardDescriptionProps = {
  typeDesc:string;
}

function FilmCardDescription({typeDesc}:FilmCardDescriptionProps): JSX.Element | null{
  let description = <FilmOverview />;

  switch(typeDesc) {
    case FilmDescType.Overview:
      description = <FilmOverview />;
      break;
    case FilmDescType.Details:
      description = <FilmDetails />;
      break;
    case FilmDescType.Reviews:
      description = <FilmReviewList />;
      break;
  }
  return description;
}

export default FilmCardDescription;
