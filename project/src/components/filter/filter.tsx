import './filter.css';
import React from 'react';

function Filter () {
  return(
    <section className="main__filter">
      <h2 className="visually-hidden">Фильтры</h2>
      <form className="main__filter filter">
        <fieldset className="filter__set filter-set">
          <legend className="filter-set__legend legend">Количество пересадок</legend>
          <ul className="filter-set__list">
            <li className="filter-set__item">
              <label className="filter-set__label">
                Все
                <input className="filter-set__checkbox" type="checkbox"/>
              </label>
            </li>
            <li className="filter-set__item">
              <label className="filter-set__label">
                Без пересадок
                <input className="filter-set__checkbox" type="checkbox"/>
              </label>
            </li>
            <li className="filter-set__item">
              <label className="filter-set__label">
                1 пересадка
                <input className="filter-set__checkbox" type="checkbox"/>
              </label>
            </li>
            <li className="filter-set__item">
              <label className="filter-set__label">
                2 пересадка
                <input className="filter-set__checkbox" type="checkbox"/>
              </label>
            </li>
            <li className="filter-set__item">
              <label className="filter-set__label">
                3 пересадка
                <input className="filter-set__checkbox" type="checkbox"/>
              </label>
            </li>
          </ul>
        </fieldset>
      </form>
      <div className="logo page__logo">
        <div className="logo__wrapper">
          <img className="logo__image logo__image--filter" src="./image/logo-no-shadow.svg" alt="Логотип Aviasales" />
        </div>
      </div>
    </section>
  );
}

export default Filter;
