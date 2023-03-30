type FormRatingStarProps = {
  starCount: number;
  checkedHandle: (value: number)=>void;
  rating: number;
}

function FormRatingStar({starCount, checkedHandle, rating}: FormRatingStarProps): JSX.Element{
  const isChecked = starCount === rating;
  return (
    <>
      <input className="rating__input" id={`star-${starCount}`} type="radio" name="rating" value={starCount}
        onChange={(evt)=>checkedHandle(Number(evt.target.value))} checked={isChecked}
      />
      <label className="rating__label" htmlFor={`star-${starCount}`}>Rating {starCount}</label>

    </>
  );
}

export default FormRatingStar;
