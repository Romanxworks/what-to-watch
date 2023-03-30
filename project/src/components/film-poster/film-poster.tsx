type FilmPosterProps = {
  posterSize?: string;
  title: string;
  poster: string;
};

function FilmPoster({posterSize, title, poster}:FilmPosterProps): JSX.Element{
  const size = posterSize ? `film-card__poster--${posterSize}` : '';
  return (
    <div className={`film-card__poster ${size}`}>
      <img src={poster} alt={title} width="218" height="327" />
    </div>
  );
}

export default FilmPoster;
