type FilmDescriptionProps = {
  isMain: boolean;
  title: string;
  genre: string;
  year: string;
}

function FilmDescription({isMain = false, title, genre, year}:FilmDescriptionProps): JSX.Element{
  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{title}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{year}</span>
      </p>

      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button" type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button className="btn btn--list film-card__button" type="button">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
          <span className="film-card__count">9</span>
        </button>
        {isMain ? '' : <a href="add-review.html" className="btn film-card__button">Add review</a>}
      </div>
    </div>
  );
}

export default FilmDescription;
