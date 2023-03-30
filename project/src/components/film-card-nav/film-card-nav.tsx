import {MouseEvent} from 'react';
import {FilmDescType} from '../const';

type FilmCardDescriptionProps = {
  typeDesc: string;
  filmTypeChange:(value: FilmDescType)=> void;
}

function FilmCardNav({filmTypeChange, typeDesc}: FilmCardDescriptionProps): JSX.Element{
  function filmTypeChangeHandle(evt: MouseEvent<HTMLElement>){
    evt.preventDefault();
    const type = FilmDescType[evt.currentTarget.innerText as FilmDescType];
    filmTypeChange(type);
  }
  return(
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${typeDesc === FilmDescType.Overview ? 'film-nav__item--active' : ''}`}>
          <a href="/" className="film-nav__link" onClick={filmTypeChangeHandle}>{FilmDescType.Overview}</a>
        </li>
        <li className={`film-nav__item ${typeDesc === FilmDescType.Details ? 'film-nav__item--active' : ''}`}>
          <a href="/" className="film-nav__link" onClick={filmTypeChangeHandle}>{FilmDescType.Details}</a>
        </li>
        <li className={`film-nav__item ${typeDesc === FilmDescType.Reviews ? 'film-nav__item--active' : ''}`}>
          <a href="/" className="film-nav__link" onClick={filmTypeChangeHandle}>{FilmDescType.Reviews}</a>
        </li>
      </ul>
    </nav>
  );
}

export default FilmCardNav;
