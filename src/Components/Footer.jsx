export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>الرئيسية</h3>
            <ul style={{ marginRight: "20px" }}>
              <li>
                <a href="home.html">الرئيسية</a>
              </li>
              <li>
                <a href="about.html">أهدافنا من التطوع</a>
              </li>
              <li>
                <a href="add.html">اضافة متبرع</a>
              </li>
              <li>
                <a href="donors.html">بحث عن متبرع</a>
              </li>
              <li>
                <a href="details.html">التفاصيل</a>
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
              onClick={() => (location.pathname = "/add")}
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
