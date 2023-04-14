import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {useState} from 'react';

type FilmCardProps = {
  id: number;
  title: string;
  previewImage: string;
  previewVideo: string;
  onOverHandle?: (id: number)=>void;
}

function FilmCard({id, title, previewImage, previewVideo, onOverHandle}: FilmCardProps): JSX.Element{
  const [isPlaying, setIsPlaying] = useState(false);

  return(
    <article className="small-film-card catalog__films-card" onMouseOver={()=>setIsPlaying(true)}
      onMouseOut={()=>setIsPlaying(false)}
    >
      <div className="small-film-card__image">
        <VideoPlayer source={previewVideo} poster={previewImage} isPlaying={isPlaying}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>);
}

export default FilmCard;
