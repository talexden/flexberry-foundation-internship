import './card.css';

function Card(): JSX.Element {
  return (
    <li className="catalog__item">
      <article className="catalog__card card">
        <div className="card__header-wrapper">
          <h3 className="card__title visually-hidden">Рейсы S7</h3>
          <p className="card__price">13 400 Р</p>
          <img className="card__image" src="./image/s7-logo.png" width="110" height="36" alt="logo S7"/>
        </div>
        <ul className="card__table-list">
          <li className="card__table-item">
            <table className="table">
              <tbody>
                <tr className="table__row">
                  <td className="table__data">MOW – HKT</td>
                  <td className="table__data">В пути</td>
                  <td className="table__data">2 пересадки</td>
                </tr>
                <tr className="table__row">
                  <td className="table__data">10:45 – 08:00</td>
                  <td className="table__data">21ч 15м</td>
                  <td className="table__data">HKG, JNB</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="card__table-item">
            <table className="table">
              <tbody>
                <tr className="table__row">
                  <td className="table__data">MOW – HKT</td>
                  <td className="table__data">В пути</td>
                  <td className="table__data">2 пересадки</td>
                </tr>
                <tr className="table__row">
                  <td className="table__data">10:45 – 08:00</td>
                  <td className="table__data">21ч 15м</td>
                  <td className="table__data">HKG, JNB</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </article>
    </li>
  );
}

export default Card;
