import './header.css';

function Header ():JSX.Element {
  return (
    <header className="header page__header" >
      <img className="logo header__logo container"src="../../../public/image/logo.svg" alt="Logo" />
    </header>
  );
}

export default Header;
