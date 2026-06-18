import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useUser } from "../UserContext";
import ProfileDropdown from "./ProfileDropDown";
export default function Header({ active }) {
  const navigate = useNavigate();

  let [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false,
  );
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  let [isProfileOpen, setIsProfileOpen] = useState(false);

  const { user, loading } = useUser();

  function handleAuthClick(e) {
    e.preventDefault();
    if (isLoggedIn) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      navigate("/register");
    }
  }

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
            <div
              className="bar"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i
                  onClick={() => setIsProfileOpen(false)}
                  className="fa-solid fa-bars"
                ></i>
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

          <div className="header-action">
            {isLoggedIn ? (
              <>
                <div
                  className="profile"
                  onClick={() => {
                    setIsProfileOpen(!isProfileOpen);
                    setIsMenuOpen(false);
                  }}
                >
                  {user ? user.name.charAt(0).toUpperCase() : ""}
                </div>
                {isProfileOpen ? (
                  <div
                    onClick={() => {
                      setIsProfileOpen(false);
                    }}
                    style={{
                      position: "fixed",
                      zIndex: 10,
                      backgroundColor: "#0000005e",
                      width: "100vw",
                      height: "calc(100vh - 78px)",
                      top: "78px",
                      left: "0",
                    }}
                  />
                ) : (
                  ""
                )}

                <ProfileDropdown
                  isOpen={isProfileOpen}
                  onClose={() => setIsProfileOpen(false)}
                />
              </>
            ) : (
              <a
                onClick={handleAuthClick}
                className="btn-register"
                style={{ cursor: "pointer" }}
              >
                التسجيل
              </a>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
