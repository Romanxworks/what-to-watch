import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function MyListPage(): JSX.Element{
  return(
    <div className="user-page">
      <Header title='My list' isAuth/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
