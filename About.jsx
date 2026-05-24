import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function Details() {
  return (
    <>
      <div className="about-body" dir="rtl">
        <Header active="about" />

        <div className="about-container">
          <div className="about-images">
            <div className="img-box" data-aos="fade-up">
              <h4>Before</h4>
              <img src="./images/before.jpg" />
            </div>
            <div className="img-box" data-aos="fade-up">
              <h4>After</h4>
              <img src="./images/after.jpg" />
              <div className="dot"></div>
            </div>
          </div>
          <div className="content">
            <div className="about-card big" data-aos="fade-up">
              <h2>"الفكره الاساسية:"</h2>
              <span>OUR STORY AND OUR MESSAGE</span>
              <p>
                محمود شاب في بداية العشرينات من عمره عمل حادثة كبيرة جدًا وللأسف
                أدت لفقد كبير جدًا من الدم بتاعه <br />
                والمشكلة الأكبر اللي واجهته ان فصيلة دمه للأسف (-A) ودي من فصائل
                الدم النادرة جدًا
                <br />
                لكن بفضل الله ثم الويب ابلكيشن تم الحصول علي فصيلة الدم النادرة
                <br />
                وهو بصحة جيدة جدا و بنشاط كبير <br />
              </p>
            </div>
            <div className="about-row">
              <div className="about-card small" data-aos="fade-up">
                <h3>اهدافنا :</h3>
                <ul>
                  <li>نشر الوعي</li>
                  <li>إنقاذ حياة</li>
                  <li>تشجيع التبرع</li>
                </ul>
              </div>
              <div className="about-card small" data-aos="fade-up">
                <h3>المراد تحقيقه:</h3>
                <ul>
                  <li>مجتمع متعاون</li>
                  <li>وصول أسرع</li>
                  <li>توفير الفصائل</li>
                </ul>
              </div>
            </div>

            <div className="about-card vision" data-aos="fade-up">
              <div className="text">
                <h3>الهدف الرئيسي :</h3>
                <p>نربط المتبرع بالمحتاج بسرعة وكفاءة</p>
              </div>
              <div className="about-icon">
                <i className="fas fa-handshake"></i>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
