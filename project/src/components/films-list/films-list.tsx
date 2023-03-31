import {useState} from 'react';
import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Film[];
}

function FilmsList({films}: FilmsListProps): JSX.Element{
  const [filmId, setFilmId] = useState(0);
  console.log(filmId);
  return(
    <div className="catalog__films-list">
      {
        films.map((film)=>(
          <FilmCard
            id={film.id}
            title={film.name}
            previewImage={film.previewImage}
            onOverHandle={setFilmId}
            key={`${film.id}-${film.name}`}
          />
        ))
      }

    </div>
  );
}

export default FilmsList;
