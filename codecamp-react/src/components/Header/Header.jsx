import "./Header.css";

const NAV_LINKS = ["Курсы", "Преподаватели", "Отзывы", "Контакты"];

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="logo">
          Code<span>Camp</span>
        </div>

        <nav className="nav">
          {NAV_LINKS.map((link, index) => (
            <a key={index} href="#" className="nav__link">
              {link}
            </a>
          ))}
        </nav>

        <button className="btn btn--outline">Войти</button>
      </div>
    </header>
  );
}
