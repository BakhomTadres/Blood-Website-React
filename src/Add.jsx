import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function Add({ donors, setDonors }) {
  const navigate = useNavigate();

  let [nameDonor, setNameDonor] = useState("");
  let [citySelect, setCitySelect] = useState(
    localStorage.getItem("city") || "قنا",
  );
  let [emailDonor, setEmailDonor] = useState("");
  let [bloodGroup, setBloodGroup] = useState(
    localStorage.getItem("bloodGroup") || "+A",
  );
  let [phoneDonor, setPhoneDonor] = useState("");
  let [addressDonor, setAddressDonor] = useState("");

  const [gender, setGender] = useState(
    localStorage.getItem("gender") || "male",
  );

  let [phoneError, setPhoneError] = useState("");
  let [addressError, setAddressError] = useState("");
  let [nameError, setNameError] = useState("");
  let [emailError, setEmailError] = useState("");

  return (
    <>
      <div
        style={{ padding: "80px 0 0", background: "#fafafa", direction: "rtl" }}
      >
        <Header active={"add"} />

        <div className="form-container">
          <h2 className="form-title">إضافة متبرع جديد</h2>
          <form>
            <div className="section">
              <h3 className="section-title">البيانات الشخصية</h3>

              <div className="row">
                <div className="field">
                  <label>الاسم الكامل</label>
                  <input
                    type="text"
                    className="name-input"
                    value={nameDonor}
                    onChange={(e) => {
                      setNameDonor(e.target.value);
                    }}
                  />
                  <p className="name-error">{nameError}</p>
                </div>

                <div className="field">
                  <label>تاريخ الميلاد</label>
                  <input type="date" />
                </div>
              </div>

              <div className="row">
                <div className="field">
                  <label>الجنس</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        className="male"
                        checked={gender === "male"}
                        onChange={() => {
                          setGender("male");
                          localStorage.setItem("gender", "male");
                        }}
                      />{" "}
                      ذكر
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        className="female"
                        checked={gender === "female"}
                        onChange={() => {
                          setGender("female");
                          localStorage.setItem("gender", "female");
                        }}
                      />
                      أنثى
                    </label>
                  </div>
                </div>

                <div className="field">
                  <label>فصيلة الدم</label>
                  <select
                    className="blood-group"
                    required
                    value={bloodGroup}
                    onChange={(e) => {
                      setBloodGroup(e.target.value);
                      localStorage.setItem("bloodGroup", e.target.value);
                    }}
                  >
                    <option value="+A">+A</option>
                    <option value="-A">-A</option>
                    <option value="+B">+B</option>
                    <option value="-B">-B</option>
                    <option value="+AB">+AB</option>
                    <option value="-AB">-AB</option>
                    <option value="+O">+O</option>
                    <option value="-O">-O</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="section">
              <h3 className="section-title">بيانات الاتصال والموقع</h3>

              <div className="row">
                <div className="field">
                  <label>البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email-input"
                    value={emailDonor}
                    onChange={(e) => setEmailDonor(e.target.value)}
                  />
                  <p className="email-error">{emailError}</p>
                </div>

                <div className="field">
                  <label>رقم الهاتف</label>
                  <input
                    type="number"
                    className="phone-donor"
                    required
                    value={phoneDonor}
                    onChange={(e) => {
                      setPhoneDonor(e.target.value);
                    }}
                  />
                  <p className="phone-error">{phoneError}</p>
                </div>
              </div>

              <div className="row">
                <div className="field">
                  <label>المدينة</label>
                  <select
                    name="city"
                    id="city"
                    value={citySelect}
                    onChange={(e) => {
                      setCitySelect(e.target.value);
                      localStorage.setItem("city", e.target.value);
                    }}
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
                </div>

                <div className="field">
                  <label>العنوان</label>
                  <input
                    type="text"
                    className="address-donor"
                    required
                    value={addressDonor}
                    onChange={(e) => {
                      setAddressDonor(e.target.value);
                    }}
                  />
                  <p className="address-error">{addressError}</p>
                </div>
              </div>
            </div>

            <div className="add-donor-buttons">
              <button
                className="save"
                onClick={(e) => {
                  e.preventDefault();

                  const validPhone =
                    phoneDonor.length === 11 &&
                    (phoneDonor.startsWith("012") ||
                      phoneDonor.startsWith("011") ||
                      phoneDonor.startsWith("010") ||
                      phoneDonor.startsWith("015"));

                  if (
                    nameDonor !== "" &&
                    validPhone &&
                    addressDonor !== "" &&
                    emailDonor.includes("@")
                  ) {
                    let donor = {
                      name: nameDonor,
                      address: addressDonor,
                      city: citySelect,
                      phone: phoneDonor,
                      email: emailDonor,
                      gender: gender,
                      bloodGroup: bloodGroup,
                    };

                    const newDonors = [...donors, donor];
                    setDonors(newDonors);
                    localStorage.setItem("donors", JSON.stringify(newDonors));

                    // Reset fields
                    setNameDonor("");
                    setEmailDonor("");
                    setPhoneDonor("");
                    setAddressDonor("");

                    navigate("/donors");
                  } else {
                    if (phoneDonor.length !== 11) {
                      setPhoneError("ادخل رقم التليفون الخاص بك 11 رقم");
                    } else if (!validPhone) {
                      setPhoneError("ادخل رقم التليفون الخاص بك بشكل صحيح");
                    } else {
                      setPhoneError("");
                    }

                    if (addressDonor === "") {
                      setAddressError("ادخل العنوان الخاص بك");
                    } else {
                      setAddressError("");
                    }

                    if (nameDonor === "") {
                      setNameError("ادخل اسمك");
                    } else {
                      setNameError("");
                    }

                    if (emailDonor === "") {
                      setEmailError("من فضلك ادخل ايميلك");
                    } else if (!emailDonor.includes("@")) {
                      setEmailError("من فضلك ادخل ايميلك و تحتوي علي @");
                    } else {
                      setEmailError("");
                    }
                  }
                }}
              >
                حفظ المتبرع
              </button>
              <button
                className="cancel"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
