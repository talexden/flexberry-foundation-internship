import './main-page.css';
import Header from '../header/header';
import Catalog from '../catalog/catalog';
import Sort from '../sort/sort';
import Filter from '../filter/filter';
import {HIDDEN_TAB_INDEX} from '../../common/const';

function MainPage ():JSX.Element {
  return (
    <div className="page">
      <div className="page__wrapper container">
        <Header/>
      </div>
      <div className="page-wrapper container">
        <main className="page__main main">
          <h1 className="visually-hidden" aria-hidden tabIndex={HIDDEN_TAB_INDEX}>Авиабилеты</h1>
          <div className="page__filter-wrapper">
            <Filter />
          </div>
          <div className="page__catalog-wrapper">
            <Sort />
            <Catalog />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
