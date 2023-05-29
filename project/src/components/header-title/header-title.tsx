type HeaderTitleProps = {
  title: string;
  count?: number;
}

function HeaderTitle({title, count}: HeaderTitleProps): JSX.Element{
  return (
    <h1 className="page-title user-page__title">{title}
      <span className="user-page__film-count">{count}</span>
    </h1>);
}
export default HeaderTitle;
