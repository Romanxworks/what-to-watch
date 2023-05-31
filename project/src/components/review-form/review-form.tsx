import {FormEvent, useState} from 'react';
import {STAR_COUNT} from '../../const';
import FormRatingStar from '../form-rating-star/form-rating-star';
import { ReviewData } from '../../types/review-data';
import { processErrorHandle } from '../../services/process-error-handle';
import { addReviewAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

type ReviewFormProps = {
  id: number;
}

function ReviewForm({id}: ReviewFormProps): JSX.Element{
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useAppDispatch();

  function onSubmit(review: ReviewData){
    dispatch(addReviewAction(review));
    setIsDisabled(false);
  }

  function onSubmitHandler(evt: FormEvent<HTMLFormElement>){
    evt.preventDefault();
    if(rating === 0 || (reviewText.length < 50 || reviewText.length > 400)){
      processErrorHandle('Error Form data');
      setIsDisabled(false);
    }else{
      setIsDisabled(true);
      onSubmit({id,rating, comment:reviewText});
      setRating(0);
      setReviewText('');
    }
  }

  function getStarList(){
    const stars = [];
    for(let i = STAR_COUNT; i > 0; i--){
      stars.push(<FormRatingStar starCount={i} checkedHandle={setRating} rating={rating} key={i}/>);
    }
    return stars;
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onSubmitHandler}>
        <div className="rating">
          <div className="rating__stars">
            {getStarList()}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewText}
            onChange={(evt)=> setReviewText(evt.target.value)}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isDisabled}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
