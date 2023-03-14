import FilmCard from '../film-card/film-card';

function FilmsList(): JSX.Element{
  return(
    <div className="catalog__films-list">
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
    </div>
  );
}

export default FilmsList;
