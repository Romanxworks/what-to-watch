import { useEffect } from 'react';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';


function MyListPage(): JSX.Element{
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);

  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  return(
    <div className="user-page">
      <Header title='My list'/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {favoriteFilms.length > 0 ? <FilmsList films= {favoriteFilms}/> : ''}
      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;
