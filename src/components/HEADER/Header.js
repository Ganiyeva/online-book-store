import { NavLink } from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="link-nav">
          <div>
            <NavLink to="/"> <img className="page-logo" src="img/MyBook.png" alt="logo" /> </NavLink>
            <input type="text" placeholder="Книга или автор" className="search" />
          </div>
          <div>
            <NavLink className="link" activeClassName="active" to="/library"> Библиотека </NavLink>
            <NavLink className="link" activeClassName="active" to="/sign-up"> Подписка </NavLink>
            <NavLink className="link" activeClassName="active" to="/introduction"> Войти </NavLink>
          </div>
        </nav>
        <nav className="filter-nav">
          <NavLink className="filter" activeClassName="active" to="/audio"> 🎧 Аудиокниги </NavLink>
          <NavLink className="filter" activeClassName="active" to="/free"> 👌 Бесплатные книги </NavLink>
          <NavLink className="filter" activeClassName="active" to="/new"> 🔥 Новинки </NavLink>
          <NavLink className="filter" activeClassName="active" to="/top"> ❤️ Топ книг </NavLink>
          <NavLink className="filter" activeClassName="active" to="/top-audio"> 🎙 Топ аудиокниг </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;