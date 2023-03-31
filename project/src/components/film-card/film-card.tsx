import {Link} from 'react-router-dom';

type FilmCardProps = {
  id: number;
  title: string;
  previewImage: string;
  onOverHandle: (id: number)=>void;
}

function FilmCard({id, title, previewImage, onOverHandle}: FilmCardProps): JSX.Element{
  return(
    <article className="small-film-card catalog__films-card" onMouseOver={()=>onOverHandle(id)}>
      <div className="small-film-card__image">
        <img src={previewImage} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>);
}

export default FilmCard;
