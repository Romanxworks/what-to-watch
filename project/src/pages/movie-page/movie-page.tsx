import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import FilmCardNav from '../../components/film-card-nav/film-card-nav';
import FilmPoster from '../../components/film-poster/film-poster';
import FilmDescription from '../../components/film-description/film-description';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import {useState, Fragment, useEffect} from 'react';
import {AuthStatus, FilmDescType} from '../../const';
// import {Film} from '../../types/film';
import {useParams} from 'react-router-dom';
import ErrorPage from '../error-page/error-page';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {films} from '../../mocks/films';
import { fetchSingleFilmAction } from '../../store/api-actions';

function MoviePage(): JSX.Element{
  const {id} = useParams();
  const idToQuery = id ? +id : null;
  const dispatch = useAppDispatch();
  const [filmDescType, setFilmDescType] = useState(FilmDescType.Overview);

  useEffect(()=>{
    if(idToQuery){
      dispatch(fetchSingleFilmAction(idToQuery));
    }
  },[idToQuery]);

  const {authStatus, filmById} = useAppSelector((state)=>state);
  const isAuth = authStatus === AuthStatus.Auth;
  const {name, backgroundImage, genre, released, posterImage} = filmById ?? films[0];

  return filmById ?
    (
      <Fragment>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={isAuth ? backgroundImage : 'img/bg-header.jpg'} alt={isAuth ? name : 'gues'} />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <Header authStatus={isAuth}/>
            <div className="film-card__wrap">
              <FilmDescription authStatus={isAuth} title={name} genre={genre} year={released} id={Number(id)}/>
            </div>
          </div>
          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <FilmPoster posterSize={'big'} title={name} poster={posterImage}/>
              <div className="film-card__desc">
                <FilmCardNav filmTypeChange={setFilmDescType} typeDesc={filmDescType}/>
                <FilmCardDescription typeDesc={filmDescType} film={filmById ?? films[0]}/>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmsList films={films.slice(5, 9)}/>
          </section>
          <Footer />
        </div>
      </Fragment>
    ) :
    <ErrorPage />;
}


export default MoviePage;
