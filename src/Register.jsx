import { useState } from "react";
export default function Register() {
  // Variables
  let registerBtn = document.querySelector(".register-btn");

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
              localStorage.setItem("name", e.target.value);
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
              localStorage.setItem("email", e.target.value);
            }}
          />
          <p className="email-error">{emailError}</p>
          <select
            name="city"
            id="city"
            onChange={(e) => {
              setCitySelect(e.target.value);
              localStorage.setItem("city", e.target.value);
            }}
            value={localStorage.getItem("city") || "قنا"}
          >
            <option value="القاهرة">القاهرة</option>
            <option value="الإسكندرية">الإسكندرية</option>
            <option value="بورسعيد">بورسعيد</option>
            <option value="السويس">السويس</option>
            <option value="الجيزة">الجيزة</option>
            <option value="دمياط">دمياط</option>
            <option value="الدقهلية">الدقهلية</option>
            <option value="الشرقية">الشرقية</option>
            <option value="القليوبية">القليوبية</option>
            <option value="كفر الشيخ">كفر الشيخ</option>
            <option value="الغربية">الغربية</option>
            <option value="المنوفية">المنوفية</option>
            <option value="البحيرة">البحيرة</option>
            <option value="الإسماعيلة">الإسماعيلة</option>
            <option value="بني سويف">بني سويف</option>
            <option value="الفيوم">الفيوم</option>
            <option value="المنيا">المنيا</option>
            <option value="أسيوط">أسيوط</option>
            <option value="سوهاج">سوهاج</option>
            <option value="قنا">قنا</option>
            <option value="الأقصر">الأقصر</option>
            <option value="أسوان">أسوان</option>
            <option value="البحر الأحمر">البحر الأحمر</option>
            <option value="الوادي الجديد">الوادي الجديد</option>
            <option value="مطروح">مطروح</option>
            <option value="شمال سيناء">شمال سيناء</option>
            <option value="جنوب سيناء">جنوب سيناء</option>
          </select>
          <div className="pass-field">
            <input
              type="password"
              name="pass"
              type={showPassword ? "text" : "password"}
              value={passwordInput}
              placeholder=" ادخل كلمة السر"
              className="pass-input"
              onChange={(e) => {
                setPasswordInput(e.target.value);
                localStorage.setItem("password", e.target.value);
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
              onClick={(e) => {
                e.preventDefault();
                // Test for registeration
                if (
                  nameInput != "" &&
                  emailInput != "" &&
                  emailInput.includes("@") &&
                  passwordInput.length >= 8
                ) {
                  location.pathname = "/";
                  setNameInput("");
                  setEmailInput("");
                  setCitySelect("قنا");
                  setPasswordInput("");
                } else {
                  nameInput == ""
                    ? setNameError("من فضلك ادخل اسمك")
                    : setNameError("");

                  emailInput == ""
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
                location.pathname = "/login";
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
