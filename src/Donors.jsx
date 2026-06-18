import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import { useDonors } from "./DonorsContext";
import axios from "axios";
import { useUser } from "./UserContext";
import UpdateDonor from "./Components/UpdateDonor";
export default function Donors() {
  const {
    filteredDonors,
    loading,
    searchDonors,
    incrementCallCount,
    setDonors,
    setFilteredDonors,
  } = useDonors();
  let [cityFilter, setCityFilter] = useState("الكل");
  let [bloodGroupFilter, setBloodGroupFilter] = useState("الكل");
  const [showUpdateDonor, setShowUpdateDonor] = useState(false);
  const [donorId, setDonorId] = useState("");
  const { user } = useUser();

  const cityArray = [
    "الكل",
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
  const bloodArray = ["الكل","A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSearch = () => {
    searchDonors(bloodGroupFilter, cityFilter);
  };

  return (
    <>
      {showUpdateDonor ? (
        <UpdateDonor
          donorId={donorId}
          setShowUpdateDonor={setShowUpdateDonor}
        />
      ) : (
        ""
      )}

      <div dir="rtl" style={{ padding: "50px 0 0", background: "#fafafa" }}>
        <Header active={"donors"} />

        <h1 className="donors-title">قائمة المتبرعين</h1>

        <div className="search">
          <div style={{ fontSize: "18px", width: "255px" }}>
            فصيلة الدم:
            <select
              dir="ltr"
              name="blood-group"
              id="blood-group-donors"
              value={bloodGroupFilter}
              onChange={(e) => setBloodGroupFilter(e.target.value)}
            >
              {bloodArray.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
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
              {cityArray.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
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
          {loading ? (
            <p className="donors-error" style={{ textAlign: "center" }}>
              جاري التحميل...
            </p>
          ) : filteredDonors.length === 0 ? (
            <p className="donors-error">لا يوجد متبرعين مطابقين للبحث</p>
          ) : (
            filteredDonors.map((donor, index) => (
              <div className="card" key={index}>
                {user && user.role === "admin" ? (
                  <div className="icons-edit">
                    <div
                      onClick={async () => {
                        const token = localStorage.getItem("token");

                        await axios.delete(
                          `https://blood-website-backend.vercel.app/api/donors/${donor._id}`,
                          {
                            headers: {
                              Authorization: `Bearer ${token}`,
                            },
                          },
                        );
                        setDonors(
                          filteredDonors.filter((d) => d._id != donor._id),
                        );
                        setFilteredDonors(
                          filteredDonors.filter((d) => d._id != donor._id),
                        );
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </div>
                    <div
                      onClick={() => {
                        setDonorId(donor._id);
                        setShowUpdateDonor(true);
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="card-header">
                  <div className="profile-donor">
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <span dir="ltr" className="blood">
                    {donor.bloodGroup}
                  </span>
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
                  onClick={async () => {
                    await incrementCallCount();
                    window.location.href = `tel:${donor.phone}`;
                  }}
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
