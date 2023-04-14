import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Film[];
}

function FilmsList({films}: FilmsListProps): JSX.Element{
  return(
    <div className="catalog__films-list">
      {
        films.map((film)=>(
          <FilmCard
            id={film.id}
            title={film.name}
            previewImage={film.previewImage}
            previewVideo={film.previewVideoLink}
            key={`${film.id}-${film.name}`}
          />
        ))
      }
    </div>
  );
}

export default FilmsList;
