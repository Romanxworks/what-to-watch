import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSingleFilmAction } from '../../store/api-actions';


function PlayerPage(): JSX.Element{
  const {id} = useParams();
  const navigate = useNavigate();

  const idToQuery = id ? +id : null;
  const dispatch = useAppDispatch();

  useEffect(()=>{
    if(idToQuery){
      dispatch(fetchSingleFilmAction(idToQuery));
    }
  },[idToQuery, dispatch]);

  const filmById = useAppSelector((state)=>state.filmById);

  const {videoLink, previewImage} = filmById;

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState({value:0, runTime:0});
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function onClickExitHandler(){
    videoRef.current = null;
    navigate(`/films/${id ? id : '/'}`);
  }

  useEffect(()=>{
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));
    videoRef.current.addEventListener('timeupdate', () => {
      if(videoRef.current){
        setProgress({
          value: Math.floor((videoRef.current.currentTime * 100) / videoRef.current.duration),
          runTime: Math.floor(videoRef.current.duration - videoRef.current.currentTime)
        });
      }
    });

    if(isPlaying && !isLoading){
      videoRef.current?.play();
      return;
    }
    videoRef.current?.pause();
  },[isPlaying, isLoading]);

  return(
    <div className="player">
      <video src={videoLink} className="player__video" poster={previewImage} ref={videoRef}>
      </video>
      <button type="button" className="player__exit" onClick={onClickExitHandler}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress.value} max="100"></progress>
            <div className="player__toggler" style={{left:`${progress.value}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{progress.runTime}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play"
            disabled={isLoading} onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ?
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg> :
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
