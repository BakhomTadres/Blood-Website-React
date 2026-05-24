import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useNavigate } from "react-router";
export default function HomePage() {
  let navigate = useNavigate();
  return (
    <>
      <Header active="home" />
      <div className="" style={{ padding: "80px 0 0" }} dir="rtl">
        <section className="home">
          <div className="overlay">
            <h1>
              تبرّع <span>بالدّم</span>، أنقذ حياةً
            </h1>
            <h3>كن سببًا في شفاء آخرين</h3>
            <br />
            <div className="buttons">
              <button onClick={() => navigate("/add")} className="btn primary">
                سجّل كمتبرع
              </button>
              <button
                onClick={() => navigate("/donors")}
                className="btn outline"
              >
                اطلب متبرعًا
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
