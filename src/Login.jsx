import { useState } from "react";
import { useNavigate } from "react-router";
export default function Login() {
  // Variables
  let loginBtn = document.querySelector(".login-btn");

  let [passwordInput, setPasswordInput] = useState("");
  let [emailInput, setEmailInput] = useState("");

  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  let [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();
  return (
    <>
      <div dir="rtl" className="login-body">
        <div className="login-overlay"></div>
        <form className="login-form" action="">
          <h1>تسجيل الدخول</h1>
          <input
            type="email"
            name="mail"
            value={emailInput}
            placeholder="ادخل الايميل الخاص بك"
            className="email-login-input"
            required
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <p className="email-login-error">{emailError}</p>
          <div className="pass-field">
            <input
              type="password"
              name="pass"
              type={showPassword ? "text" : "password"}
              placeholder="ادخل كلمة السر الخاصة بك"
              className="pass-login-input"
              required
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <div
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <i className="fa-solid fa-eye"></i>
              ) : (
                <i className="fa-solid fa-eye-slash"></i>
              )}
            </div>
          </div>
          <p className="pass-error">{passwordError}</p>
          <div className="buttons">
            <button
              className="login-btn"
              onClick={(e) => {
                e.preventDefault();
                // Validation with email and password
                if (
                  emailInput != "" &&
                  emailInput.includes("@") &&
                  emailInput == localStorage.getItem("email") &&
                  passwordInput == localStorage.getItem("password")
                ) {
                  localStorage.setItem("isLoggedIn", "true");
                  navigate("/");
                } else {
                  emailInput == ""
                    ? setEmailError("من فضلك ادخل ايميلك")
                    : !emailInput.includes("@")
                      ? setEmailError("من فضلك ادخل ايميلك و تحتوي علي @")
                      : emailInput != localStorage.getItem("email")
                        ? setEmailError("الايميل غير موجود")
                        : setEmailError("");
                }

                if (passwordInput == "") {
                  setPasswordError("ادخل كلمة السر الخاصة بك");
                } else if (passwordInput != localStorage.getItem("password")) {
                  setPasswordError(" كلمة السر الخاصة بك غير صحيحة");
                } else {
                  setPasswordError("");
                }
              }}
            >
              تسجيل الدخول
            </button>
            <button
              className="second-btn"
              onClick={() => (location.pathname = "/register")}
              style={{
                backgroundColor: "#fff",
                color: "var(--main-color)",
                transition: "var(--main-transition)",
              }}
            >
              التسجيل
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
