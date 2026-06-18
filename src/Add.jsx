import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import axios from "axios";
import { useDonors } from "./DonorsContext";

export default function Add({ donors, setDonors }) {
  const { addDonor } = useDonors();
  const navigate = useNavigate();

  let [nameDonor, setNameDonor] = useState("");
  let [citySelect, setCitySelect] = useState("قنا");
  let [emailDonor, setEmailDonor] = useState("");
  let [bloodGroup, setBloodGroup] = useState("A+");
  let [phoneDonor, setPhoneDonor] = useState("");
  let [addressDonor, setAddressDonor] = useState("");

  const [gender, setGender] = useState("male");

  let [phoneError, setPhoneError] = useState("");
  let [addressError, setAddressError] = useState("");
  let [nameError, setNameError] = useState("");
  let [emailError, setEmailError] = useState("");

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
                        }}
                      />
                      أنثى
                    </label>
                  </div>
                </div>

                <div className="field">
                  <label>فصيلة الدم</label>
                  <select
                    dir="ltr"
                    className="blood-group"
                    required
                    value={bloodGroup}
                    onChange={(e) => {
                      setBloodGroup(e.target.value);
                    }}
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
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
                    }}
                  >
                    {cityArray.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
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

                  const validatePhone =
                    phoneDonor.length === 11 &&
                    (phoneDonor.startsWith("012") ||
                      phoneDonor.startsWith("011") ||
                      phoneDonor.startsWith("010") ||
                      phoneDonor.startsWith("015"));

                  if (
                    nameDonor !== "" &&
                    validatePhone &&
                    addressDonor !== "" &&
                    emailDonor.includes("@")
                  ) {
                    let donor = {
                      name: nameDonor,
                      gender: gender,
                      bloodGroup: bloodGroup,
                      email: emailDonor,
                      phone: phoneDonor,
                      city: citySelect,
                      address: addressDonor,
                    };
                    const token = localStorage.getItem("token");

                    axios
                      .post("https://blood-website-backend.vercel.app//api/donors/add", donor, {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      })
                      .then((res) => addDonor(res.data.data.donor));

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
