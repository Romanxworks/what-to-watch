import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';


function MyListPage(): JSX.Element{
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  return(
    <div className="user-page">
      <Header title='My list'/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {favoriteFilms.length > 0 ? <FilmsList films= {favoriteFilms}/> : ''}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;
