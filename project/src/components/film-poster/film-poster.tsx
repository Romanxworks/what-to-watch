type FilmPosterProps = {
  isBigPoster:boolean;
};

function FilmPoster({isBigPoster = false}:FilmPosterProps): JSX.Element{
  return (
    <div className={`film-card__poster ${isBigPoster ? 'film-card__poster--big' : ''}`}>
      <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
    </div>
  );
}

export default FilmPoster;
