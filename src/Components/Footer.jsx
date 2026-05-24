import { useNavigate } from "react-router";

export default function Footer() {
    let navigate = useNavigate();
  return (
    <>
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>الرئيسية</h3>
            <ul style={{ marginRight: "20px" }}>
              <li>
                <a onClick={() => navigate("/")}>الرئيسية</a>
              </li>
              <li>
                <a onClick={() => navigate("/about")}>أهدافنا من التطوع</a>
              </li>
              <li>
                <a onClick={() => navigate("/add")}>اضافة متبرع</a>
              </li>
              <li>
                <a onClick={() => navigate("/donors")}>بحث عن متبرع</a>
              </li>
              <li>
                <a onClick={() => navigate("/details")}>التفاصيل</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>التواصل</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>Egypt,Qena
              </li>
              <li>
                <i className="fas fa-phone"></i>012XXXXXXXX
              </li>
              <li>
                <i className="fas fa-envelope"></i>nabdEl3taa@gmail.com
              </li>
              <li>
                <i className="fas fa-globe"></i>nabdEl3taa.com
              </li>
            </ul>
          </div>

          <div className="footer-column brand-section">
            <button
              className="register-btn"
              onClick={() => (navigate("/add"))}
            >
              سجل كمتبرع
            </button>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>منصة نبض (Nabonox) 2026 ©</p>
        </div>
      </footer>
    </>
  );
}
