import { NavLink } from "react-router-dom";
import './header.css';
import { useTranslation } from "react-i18next";
import Languages from "../Languages";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="header">
      <div className="container">
        <nav className="link-nav">
          <div>
            <NavLink to="/"> <img className="page-logo" src="img/MyBook.png" alt="logo" /> </NavLink>
            <input type="text" placeholder={t('placeholder')} className="search" />
          </div>
          <div>
            <NavLink className="link" activeClassName="active" to="/library"> {t('library')} </NavLink>
            <NavLink className="link" activeClassName="active" to="/sign-up"> {t('subscription')} </NavLink>
            <NavLink className="link" activeClassName="active" to="/registration"> {t('enter')} </NavLink>
          </div>
        </nav>
        <nav className="filter-nav">
          <NavLink className="filter" activeClassName="active" to="/audio"> 🎧 {t('audio')} </NavLink>
          <NavLink className="filter" activeClassName="active" to="/free"> 👌 {t('free')} </NavLink>
          <NavLink className="filter" activeClassName="active" to="/new"> 🔥 {t('new')} </NavLink>
          <NavLink className="filter" activeClassName="active" to="/top"> ❤️ {t('topbook')} </NavLink>
          <NavLink className="filter" activeClassName="active" to="/top-audio"> 🎙 {t('topaudio')} </NavLink>
        </nav>
        <Languages/>
      </div>
    </header>
  );
};

export default Header;