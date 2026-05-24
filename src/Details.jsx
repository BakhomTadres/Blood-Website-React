import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function Details() {
  return (
    <>
      <Header active={"details"} />
      <div
        dir="rtl"
        style={{ backgroundColor: "#f8f8f8", padding: "80px 0 0" }}
      >
        <div className="stats-container">
          <div className="stats-card stat" data-aos="fade-up">
            <div className="stats-card-content">
              <div className="stats-icon">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="stats-text">
                <h2>32,541</h2>
                <p>حياة أُنقذت</p>
              </div>
            </div>
          </div>

          <div className="stats-card stat" data-aos="fade-up">
            <div className="stats-card-content">
              <div className="stats-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="stats-text">
                <h2>8,122</h2>
                <p>نداء للتبرع</p>
              </div>
            </div>
          </div>

          <div className="stats-card stat" data-aos="fade-up">
            <div className="stats-card-content">
              <div className="stats-icon">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="stats-text">
                <h2>25,430</h2>
                <p>متبرع مسجل</p>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-container-second">
          <div className="stats-card stats-blood-card" data-aos="fade-up">
            <div className="title">فصائل الدم المطلوبة الآن:</div>

            <div className="grid">
              <div className="item">
                <div className="blood-group">-B</div>
                <div className="bag">
                  <div className="fill"></div>
                </div>
                <div className="status">نقص شديد</div>
              </div>

              <div className="item">
                <div className="blood-group">+O</div>
                <div className="bag">
                  <div className="fill"></div>
                </div>
                <div className="status">نقص شديد</div>
              </div>

              <div className="item">
                <div className="blood-group">-A</div>
                <div className="bag">
                  <div className="fill"></div>
                </div>
                <div className="status">نقص شديد</div>
              </div>

              <div className="item">
                <div className="blood-group">+AB</div>
                <div className="bag">
                  <div className="fill"></div>
                </div>
                <div className="status">نقص شديد</div>
              </div>
            </div>
          </div>

          <div className="stats-card map-card" data-aos="fade-up">
            <div className="title">أقرب مواقع التبرع</div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps?q=Qena&output=embed"
                loading="lazy"
              ></iframe>

              <span className="pin p1"></span>
              <span className="pin p2"></span>
              <span className="pin p3"></span>
              <span className="pin p4"></span>
              <span className="pin p5"></span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
