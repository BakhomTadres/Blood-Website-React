import { useState } from "react";
import { Link } from "react-router";
export default function Header({ active }) {
  let [loginName, setLoginName] = useState(
    localStorage.getItem("loginName") || false,
  );
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="main-header" dir="rtl">
        <nav
          className="nav-menu-alt"
          style={{ display: isMenuOpen ? "block" : "none" }}
        >
          <ul>
            <li>
              <Link
                to={"/"}
                className={active == "home" ? "active" : ""}
                style={{ top: "0.5px" }}
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                style={{ top: "0.5px" }}
                className={active == "about" ? "active" : ""}
              >
                لماذا نتبرع؟
              </Link>
            </li>
            <li>
              <Link
                to={"/add"}
                style={{ top: "0.5px" }}
                className={active == "add" ? "active" : ""}
              >
                اضافة متبرع
              </Link>
            </li>
            <li>
              <Link
                to={"/donors"}
                style={{ top: "0.5px" }}
                className={active == "donors" ? "active" : ""}
              >
                ابحث عن متبرع
              </Link>
            </li>
            <li>
              <Link
                to={"/details"}
                style={{ top: "0.5px" }}
                className={active == "details" ? "active" : ""}
              >
                التفاصيل
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="logo-section">
            <div className="bar" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <i className="fa-solid fa-xmark"></i> // أيقونة الإغلاق لو مفتوح
              ) : (
                <i className="fa-solid fa-bars"></i> // أيقونة الـ القائمة لو مقفول
              )}
            </div>
            <div className="logo">
              <i className="fa-solid fa-droplet"></i>
            </div>
            <div className="logo-text">
              <h1>نبض العطاء</h1>
              <span>منصة تبرع بالدم</span>
            </div>
          </div>

          <nav className="nav-menu">
            <ul>
              <li>
                <Link
                  to={"/"}
                  className={active == "home" ? "active" : ""}
                  style={{ top: "0.5px" }}
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className={active == "about" ? "active" : ""}
                >
                  لماذا نتبرع؟
                </Link>
              </li>
              <li>
                <Link to={"/add"} className={active == "add" ? "active" : ""}>
                  اضافة متبرع
                </Link>
              </li>
              <li>
                <Link
                  to={"/donors"}
                  className={active == "donors" ? "active" : ""}
                >
                  ابحث عن متبرع
                </Link>
              </li>
              <li>
                <Link
                  to={"/details"}
                  className={active == "details" ? "active" : ""}
                >
                  التفاصيل
                </Link>
              </li>
            </ul>
          </nav>

          <div
            style={{ margin: "10px", cursor: "pointer" }}
            className="header-action"
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                location.pathname = "/register";
                setLoginName(!loginName);
                localStorage.setItem("loginName", !loginName);
              }}
              className="btn-register"
            >
              {loginName ? "تسجيل الخروج" : "التسجيل"}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
