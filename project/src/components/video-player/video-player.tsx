import {useEffect, useRef, useState} from 'react';

type VideoPlayerProps = {
  source: string;
  poster: string;
  isPlaying: boolean;
}

function VideoPlayer({source, poster, isPlaying}: VideoPlayerProps): JSX.Element{
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(()=>{
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));
    if(isPlaying && !isLoading){
      const timer = setTimeout(() => {
        videoRef.current?.play();
      }, 1000);
      return () => clearTimeout(timer);
    }

    videoRef.current.load();
  },[isPlaying, isLoading]);

  return(
    <video width="280" height="175" poster={poster} muted ref={videoRef}>
      <source src={source} type="video/webm"/>
    </video>
  );
}

export default VideoPlayer;
