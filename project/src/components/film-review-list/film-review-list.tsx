import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FilmReview from '../film-review/film-review';
import { fetchReviewsAction } from '../../store/api-actions';

type FilmReviewListProps = {
  id: number;
}

function FilmReviewList({id}: FilmReviewListProps): JSX.Element{
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchReviewsAction(id));
  },[id,dispatch]);
  const reviews = useAppSelector((state)=>state.reviews);

  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.map((review) => <FilmReview review={review} key={review.id}/>)
        }
      </div>
    </div>
  );
}

export default FilmReviewList;
