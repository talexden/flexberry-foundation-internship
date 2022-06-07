import './catalog.css';
import Card from '../card/card';
import React from 'react';

function Catalog (): JSX.Element {
  return (
    <section className="main__catalog catalog">
      <h2 className="catalog__title visually-hidden">Билеты</h2>
      <ul className="catalog__list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
      <a className="catalog__button button" href="src/components/main-page/main-page#">Показать еще 5 билетов!</a>
    </section>
  );
}

export default Catalog;
