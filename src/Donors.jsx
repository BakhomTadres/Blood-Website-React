import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useState } from "react";

export default function Donors({ donors }) {
  let [cityFilter, setCityFilter] = useState("الكل");
  let [bloodGroupFilter, setBloodGroupFilter] = useState("الكل");
  let [filteredDonors, setFilteredDonors] = useState(donors);

  function handleSearch() {
    let result = donors.filter((donor) => {
      let cityMatch = cityFilter === "الكل" || donor.city === cityFilter;
      let bloodMatch =
        bloodGroupFilter === "الكل" || donor.bloodGroup === bloodGroupFilter;
      return cityMatch && bloodMatch;
    });
    setFilteredDonors(result);
  }

  return (
    <>
      <div dir="rtl" style={{ padding: "50px 0 0", background: "#fafafa" }}>
        <Header active={"donors"} />

        <h1 className="donors-title">قائمة المتبرعين</h1>

        <div className="search">
          <div style={{ fontSize: "18px" }}>
            فصيلة الدم:
            <select
              name="blood-group"
              id="blood-group-donors"
              value={bloodGroupFilter}
              onChange={(e) => setBloodGroupFilter(e.target.value)}
            >
              <option value="الكل">الكل</option>
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

          <div style={{ fontSize: "18px" }}>
            المحافظة:
            <select
              name="city"
              id="city-donors"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            >
              <option value="الكل">الكل</option>
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

          <button className="search-btn" onClick={handleSearch}>
            بحث
          </button>
        </div>

        <h1 style={{ margin: "30px 0", textAlign: "center" }}>
          المتبرعون المتاحون
        </h1>

        <div className="donors">
          {filteredDonors.length === 0 ? (
            <p className="donors-error">لا يوجد متبرعين مطابقين للبحث</p>
          ) : (
            filteredDonors.map((donor, index) => (
              <div className="card" key={index}>
                <div className="card-header">
                  <div className="profile">
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <span className="blood">{donor.bloodGroup}</span>
                </div>
                <div className="card-body">
                  <h3>{donor.name}</h3>
                  <h3>{donor.gender === "male" ? "ذكر" : "أنثى"}</h3>
                  <p className="address">
                    <i className="fa-solid fa-location-dot"></i> {donor.city} ,{" "}
                    {donor.address}
                  </p>
                  <p className="phone">
                    <i className="fa-solid fa-phone"></i> {donor.phone}
                  </p>
                  <a href={`mailto:${donor.email}`} className="mail">
                    <i className="fa-solid fa-envelope"></i> {donor.email}
                  </a>
                </div>
                <button
                  className="contact-btn"
                  onClick={() => (window.location.href = `tel:${donor.phone}`)}
                >
                  تواصل معه
                </button>
              </div>
            ))
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
