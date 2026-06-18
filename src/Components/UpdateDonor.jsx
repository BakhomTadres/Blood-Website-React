import { useState } from "react";
import { useDonors } from "../DonorsContext";
import axios from "axios";

export default function UpdateDonor({ donorId, setShowUpdateDonor }) {
  const { donors, setDonors, setFilteredDonors } = useDonors();
  const currentDonor = donors.find((d) => d._id === donorId);

  const [nameDonor, setNameDonor] = useState(currentDonor?.name || "");
  const [citySelect, setCitySelect] = useState(currentDonor?.city || "قنا");
  const [emailDonor, setEmailDonor] = useState(currentDonor?.email || "");
  const [bloodGroup, setBloodGroup] = useState(
    currentDonor?.bloodGroup || "A+",
  );
  const [phoneDonor, setPhoneDonor] = useState(currentDonor?.phone || "");
  const [addressDonor, setAddressDonor] = useState(currentDonor?.address || "");
  const [gender, setGender] = useState(currentDonor?.gender || "male");

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
  const bloodArray = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  if (!currentDonor) return null;

  const handleSave = async () => {
    const updatedDonor = {
      name: nameDonor,
      city: citySelect,
      email: emailDonor,
      bloodGroup,
      phone: phoneDonor,
      address: addressDonor,
      gender,
    };

    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        `https://blood-website-backend.vercel.app/api/donors/${donorId}`,
        updatedDonor,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      console.log("response:", res.data);
      setDonors(
        donors.map((d) => (d._id === donorId ? res.data.data.donor : d)),
      );
      setFilteredDonors(
        donors.map((d) => (d._id === donorId ? res.data.data.donor : d)),
      );
      setShowUpdateDonor(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        onClick={() => setShowUpdateDonor(false)}
        style={{
          position: "fixed",
          zIndex: 50,
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      ></div>

      <div
        dir="rtl"
        style={{
          position: "fixed",
          zIndex: 51,
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "500px",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            position: "relative",
          }}
        >
          <h2>تعديل بيانات المتبرع</h2>
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              position: "absolute",
              left: "0px",
              top: "0px",
              color: "#b30000",
            }}
            onClick={() => setShowUpdateDonor(false)}
          >
            <i style={{ fontSize: "26px" }} className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="field">
          <label>الاسم الكامل</label>
          <input
            type="text"
            value={nameDonor}
            onChange={(e) => setNameDonor(e.target.value)}
          />
        </div>

        <div className="field">
          <label>الجنس</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />{" "}
              ذكر
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />{" "}
              أنثى
            </label>
          </div>
        </div>

        <div className="field">
          <label>فصيلة الدم</label>
          <select
            dir="ltr"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            {bloodArray.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>البريد الإلكتروني</label>
          <input
            type="email"
            value={emailDonor}
            onChange={(e) => setEmailDonor(e.target.value)}
          />
        </div>

        <div className="field">
          <label>رقم الهاتف</label>
          <input
            type="number"
            value={phoneDonor}
            onChange={(e) => setPhoneDonor(e.target.value)}
          />
        </div>

        <div className="field">
          <label>المدينة</label>
          <select
            value={citySelect}
            onChange={(e) => setCitySelect(e.target.value)}
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
            value={addressDonor}
            onChange={(e) => setAddressDonor(e.target.value)}
          />
        </div>

        <div className="add-donor-buttons">
          <button className="save" onClick={handleSave}>
            حفظ التعديلات
          </button>
          <button className="cancel" onClick={() => setShowUpdateDonor(false)}>
            إلغاء
          </button>
        </div>
      </div>
    </>
  );
}
