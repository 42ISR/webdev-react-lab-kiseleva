import "./Footer.css";

const SECTION_LINKS = ["Курсы", "Преподаватели", "Отзывы"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <div className="logo logo--light">
            Code<span>Camp</span>
          </div>
          <p className="footer__text">Онлайн-школа программирования с 2018 года</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Разделы</h4>
          {SECTION_LINKS.map((link, index) => (
            <a key={index} href="#" className="footer__link">
              {link}
            </a>
          ))}
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Контакты</h4>
          <p className="footer__text">info@codecamp.example</p>
          <p className="footer__text">+7 (999) 123-45-67</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 CodeCamp. Все права защищены.</p>
      </div>
    </footer>
  );
}
