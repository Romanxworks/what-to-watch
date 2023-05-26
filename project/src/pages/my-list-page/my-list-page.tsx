import {AuthStatus} from '../../const';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {Film} from '../../types/film';
import { useAppSelector } from '../../hooks';

type MyListPageProps = {
  myFilms: Film[];
}

function MyListPage({myFilms}: MyListPageProps): JSX.Element{
  const count = myFilms.length;
  const authStatus = useAppSelector((state)=>state.authStatus);
  const isAuth = authStatus === AuthStatus.Auth;

  return(
    <div className="user-page">
      <Header title='My list' count={count} authStatus={isAuth}/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {count > 1 ? <FilmsList films= {myFilms}/> : ''}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;
