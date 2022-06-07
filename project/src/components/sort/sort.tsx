import './sort.css';

function Sort ():JSX.Element {
  return (
    <section className="main__sort sort">
      <h2 className="sort__title visually-hidden">Сортировка</h2>
      <ul className="sort__list">
        <li className="sort__item sort__item--active">
          <a className="sort__link sort__link--active" href="src/components/main-page/main-page#">Самый дешевый</a>
        </li>
        <li className="sort__item">
          <a className="sort__link" href="src/components/main-page/main-page#">Самый быстрый</a>
        </li>
        <li className="sort__item">
          <a className="sort__link" href="src/components/main-page/main-page#">Оптимальный</a>
        </li>
      </ul>
    </section>
  );
}

export default Sort;
