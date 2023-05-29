import Header from '../../components/header/header';
import FilmPoster from '../../components/film-poster/film-poster';
import ReviewForm from '../../components/review-form/review-form';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSingleFilmAction } from '../../store/api-actions';

function AddReviewPage(): JSX.Element{
  const {id} = useParams();
  const idToQuery = id ? +id : null;
  const dispatch = useAppDispatch();

  useEffect(()=>{
    if(idToQuery){
      dispatch(fetchSingleFilmAction(idToQuery));
    }
  },[idToQuery, dispatch]);

  const {name, backgroundImage, posterImage} = useAppSelector((state)=>state.filmById);

  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header filmName={name} />
        <FilmPoster posterSize={'small'} title={name} poster={posterImage}/>
      </div>
      <ReviewForm />
    </section>
  );
}

export default AddReviewPage;
