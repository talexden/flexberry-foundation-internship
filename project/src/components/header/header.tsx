import './header.css';

function Header ():JSX.Element {
  return (
    <header className="header page__header" >
      <div className="logo header__logo">
        <img className="logo__image" src="./image/logo.svg" alt="Логотип Aviasales" />
      </div>
    </header>
  );
}

export default Header;
