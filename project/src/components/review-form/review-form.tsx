import {FormEvent, useState} from 'react';
import {STAR_COUNT} from '../const';
import FormRatingStar from '../form-rating-star/form-rating-star';

function ReviewForm(): JSX.Element{
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  function onSubmitHandler(evt: FormEvent<HTMLFormElement>){
    evt.preventDefault();
    setRating(0);
    setReview('');
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
            {
              getStarList()
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={review}
            onChange={(evt)=> setReview(evt.target.value)}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
