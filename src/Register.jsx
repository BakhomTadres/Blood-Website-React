import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useUser } from "./UserContext";
export default function Register() {
  const navigate = useNavigate();

  let [nameInput, setNameInput] = useState("");
  let [emailInput, setEmailInput] = useState("");
  let [passwordInput, setPasswordInput] = useState("");
  let [citySelect, setCitySelect] = useState(
    localStorage.getItem("city") || "قنا",
  );

  let [nameError, setNameError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [showPassword, setShowPassword] = useState(false);

  const cityArray = [
    "القاهرة",
    "الإسكندرية",
    "بورسعيد",
    "السويس",
    "الجيزة",
    "دمياط",
    "الدقهلية",
    "الشرقية",
    "القليوبية",
    "كفر الشيخ",
    "الغربية",
    "المنوفية",
    "البحيرة",
    "الإسماعيلة",
    "بني سويف",
    "الفيوم",
    "المنيا",
    "أسيوط",
    "سوهاج",
    "قنا",
    "الأقصر",
    "أسوان",
    "البحر الأحمر",
    "الوادي الجديد",
    "مطروح",
    "شمال سيناء",
    "جنوب سيناء",
  ];

  const { user, setUser } = useUser();
  return (
    <>
      <div dir="rtl" className="register-body">
        <div className="register-overlay"></div>
        <form className="register-form" action="">
          <h1>التسجيل</h1>
          <input
            type="text"
            placeholder="ادخل اسمك"
            className="name-input"
            required
            value={nameInput}
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
          />
          <p className="name-error">{nameError}</p>
          <input
            type="email"
            name="mail"
            value={emailInput}
            placeholder="ادخل الايميل الخاص بك"
            className="email-input"
            required
            onChange={(e) => {
              setEmailInput(e.target.value);
            }}
          />
          <p className="email-error">{emailError}</p>
          <select
            name="city"
            id="city"
            value={citySelect}
            onChange={(e) => {
              setCitySelect(e.target.value);
            }}
          >
            {cityArray.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <div className="pass-field">
            <input
              type={showPassword ? "text" : "password"}
              name="pass"
              value={passwordInput}
              placeholder="ادخل كلمة السر"
              className="pass-input"
              onChange={(e) => {
                setPasswordInput(e.target.value);
              }}
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
              className="register-btn"
              onClick={async (e) => {
                e.preventDefault();
                if (
                  nameInput !== "" &&
                  emailInput !== "" &&
                  emailInput.includes("@") &&
                  passwordInput.length >= 8
                ) {
                  try {
                    const res = await axios.post(
                      "https://blood-website-backend.vercel.app/api/users/register",
                      {
                        name: nameInput,
                        email: emailInput,
                        city: citySelect,
                        password: passwordInput,
                      },
                    );
                    setUser(res.data.data.user);
                    setNameInput("");
                    setEmailInput("");
                    setCitySelect("قنا");
                    setPasswordInput("");
                    localStorage.setItem("token", res.data.data.user.token);
                    navigate("/");
                  } catch (err) {
                    const message = err.response?.data?.message;

                    if (message === "Email is exist")
                      setEmailError("الايميل موجود مسبقا");
                  }
                } else {
                  nameInput === ""
                    ? setNameError("من فضلك ادخل اسمك")
                    : setNameError("");

                  emailInput === ""
                    ? setEmailError("من فضلك ادخل ايميلك")
                    : !emailInput.includes("@")
                      ? setEmailError("من فضلك ادخل ايميلك و تحتوي علي @")
                      : setEmailError("");

                  passwordInput.length < 8
                    ? setPasswordError("ادخل كلمة سر اكبر من 8 احرف")
                    : setPasswordError("");
                }
              }}
            >
              التسجيل
            </button>
            <button
              className="login-btn"
              style={{
                backgroundColor: "#fff",
                color: "var(--main-color)",
                marginBottom: "20px",
              }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              تسجيل الدخول
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
