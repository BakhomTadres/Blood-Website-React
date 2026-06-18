import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useUser } from "./UserContext";
export default function Login() {
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { user, setUser } = useUser();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // reset errors
    setEmailError("");
    setPasswordError("");

    // Validation
    if (emailInput === "") {
      return setEmailError("من فضلك ادخل ايميلك");
    }
    if (!emailInput.includes("@")) {
      return setEmailError("من فضلك ادخل ايميل صحيح يحتوي على @");
    }
    if (passwordInput === "") {
      return setPasswordError("ادخل كلمة السر الخاصة بك");
    }

    // API Call
    try {
      const res = await axios.post("https://blood-website-backend.vercel.app/api/users/login", {
        email: emailInput,
        password: passwordInput,
      });
      setUser(res.data.data.user);
      if (res.data.status === "success") {
        navigate("/");
      }
      localStorage.setItem("token", res.data.data.user.token);
    } catch (err) {
      const message = err.response?.data?.message;
      if (message === "User Not Found") {
        setEmailError("الايميل غير موجود");
      } else if (message === "Incorrect password") {
        setPasswordError("كلمة السر غير صحيحة");
      } else {
        setEmailError("حدث خطأ، حاول مرة أخرى");
      }
    }
  };

  return (
    <div dir="rtl" className="login-body">
      <div className="login-overlay"></div>
      <form className="login-form" onSubmit={handleLogin}>
        <h1>تسجيل الدخول</h1>

        <input
          type="email"
          name="mail"
          value={emailInput}
          placeholder="ادخل الايميل الخاص بك"
          className="email-login-input"
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <p className="email-login-error">{emailError}</p>

        <div className="pass-field">
          <input
            type={showPassword ? "text" : "password"}
            name="pass"
            placeholder="ادخل كلمة السر الخاصة بك"
            className="pass-login-input"
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
          <button className="login-btn" type="submit">
            تسجيل الدخول
          </button>
          <button
            className="second-btn"
            type="button"
            onClick={() => navigate("/register")}
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
  );
}
