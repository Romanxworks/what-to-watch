type FilmPosterProps = {
  posterSize?: string;
};

function FilmPoster({posterSize}:FilmPosterProps): JSX.Element{
  const size = posterSize ? `film-card__poster--${posterSize}` : '';
  return (
    <div className={`film-card__poster ${size}`}>
      <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
    </div>
  );
}

export default FilmPoster;
