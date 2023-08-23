import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";

export function Layout() {
  return (
    <nav className="container-fluid p-1 Bgo text-white text-center row">
      <img src='5-13.jpgw3.webp' width={50} height={50} alt="Logo" className="photo rounded-circle" />
      <NavLink
        to="/"
        className="link px-2 col-sm-2 mt-3 Edit sil"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าหลัก
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2 col-sm-1 mt-3 Edit sil"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

export function Footer() {
  return (
    <div class="container-fluid Bgo p-1 mt-3 text-center">
      <nav class="row">
        <div className="col-sm-3 mt-3">
        <span className="Edit sil1" style={{ color: "black" }}>&copy; 2023</span><span className="Edit sil2" >ผู้จัดทำ : nattawut khempan</span>
        </div>
        <div className="col-sm-3 mt-4">
        </div>
        <div class="col-sm-3 ">
        </div>
        <div className="col-sm-3 mt-3 sil2">
          <h3 className="Edit">Back to top</h3>
        </div>
      </nav>
    </div>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <div class="container mt-5">
        <div class="row">
          <div className="po col-sm-12 p-2 text-center">
            <h3>วิธีทำอาหารญี่ปุ่นยอดฮิต</h3>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src='ทงสึ.webp'
              alt="ข้าวหมูทอดทงคัตสึ"
              className="picher rounded-circle mt-3"
            />
            <h3 className="niro mt-3 ">ข้าวหมูทอดทงคัตสึ</h3>
            <p className="Lumi p-2">
            เริ่มกันที่ เมนูอาหารญี่ปุ่น ยอดฮิตอย่าง ข้าวหมูทอดทงคัตสึ ข้าวหมูทอดสไตล์ญี่ปุ่น ที่จะทำให้คุณหลังรักการกินหมูทอด ด้วยสัมผัสที่กรอบนอกนุ่มใน อร่อยได้ในคำเดียว ทำให้เป็นหนึ่งในเมนูยอดนิยมของคนไทยเลยก็ว่าได้ ซึ่งสูตรนี้ได้มาจาก เชฟโฌ เชฟชาวญี่ปุ่นแท้ ๆ เลยทีเดียว รับรองว่า ถ้าทำขาย รสชาติอร่อย ไม่แพ้ร้านอาหารญี่ปุ่นชื่อดังแน่นอน{" "}
            </p>
            <a
              class="button btn btn-secondary Aru"
              href="Food01.js"
              type="button"
            >
              ดูวิธีทำ
            </a>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src="คัตสึ.webp"
              alt="ข้าวหมูทอดคัตสึด้ง"
              className="picher rounded-circle mt-3"
            />
            <h3 className="niro mt-3 ">ข้าวหมูทอดคัตสึด้ง</h3>
            <p className="Lumi p-2">
            ข้าวหมูทอด สไตล์ญี่ปุ่น ที่มีความแตกต่างจาก ข้าวหน้าหมูทงคัตสึ ตรงที่ หมูทอดนั้น จะถูกนำไปตุ๋นรวมกับไข่ แล้วราดลงบนข้าวอีกทีหนึ่ง ทำให้เป็น เมนูอาหารญี่ปุ่น ที่ได้รสชาติของซุปไข่ กินแล้วไม่ฝืด ลื่นคอกำลังดี{" "}
            </p>
            <button type="button" class="btn btn-secondary Aru">
              ดูวิธีทำ
            </button>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src="แกงหรี่.webp"
              alt="ข้าวแกงกะหรี่ญี่ปุ่น"
              className="picher rounded-circle mt-3"
            />
            <h3 className="niro mt-3 ">ข้าวแกงกะหรี่ญี่ปุ่น</h3>
            <p className="Lumi p-2">
            อีกหนึ่งเมนู ข้าวหมูทอด สไตล์ เมนูอาหารญี่ปุ่น ที่อร่อยและเข้มข้นยิ่งขึ้น เมื่อได้แกงกะหรี่รสชาติเข้มข้นมาทานคู่กัน จะทำให้คุณได้เพลิดเพลิน กับทั้งรสชาติของแกงกะหรี่และหมูทอดในมื้อเดียว{" "}
            </p>
            <button type="button" class="btn btn-secondary Aru">
              ดูวิธีทำ
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
