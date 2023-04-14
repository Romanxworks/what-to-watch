import {Link} from 'react-router-dom';

type BreadcrumbsProps = {
  filmName: string;
}

function Breadcrumbs({filmName}: BreadcrumbsProps): JSX.Element{
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to=".." className="breadcrumbs__link">{filmName}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to=".." className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
