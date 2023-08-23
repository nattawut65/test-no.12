import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout, Footer } from "./App";
import ReactDOM from "react-dom/client";
import "./App.css";

function Full() {
  return (
    <>
      <Layout />
      <div className="">
        <nav class="row">
          <div className="col-sm-3">
            <></>
          </div>

          <div className="col-sm-5">
            <Contact />
          </div>

          <div class="col-sm-4 ">
            <></>
          </div>
        </nav>
      </div>
      <Footer />
    </>
  );
}

function Contact() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

function SkillList() {
  return(
    <div className='skill-list'>
      <Skill skill="Unity"emoji=" 😵‍💫 " color="cyan" />
      <Skill skill="PHP"emoji=" 😵‍💫 " color="orange" />
      <Skill skill="React"emoji=" 😵‍💫 " color="yellow" />
      <Skill skill="MySQL"emoji=" 😵‍💫 " color="orangered" />
    </div>
  );
}
function Skill(props) {
  return(
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>nattawut khempan</h1>
      <p>
        นักศึกษาที่เป็นลิงในคลาบคน จึงมาเรียนictเพื่อหวังเป็นคน เมื่อเรียนเสร็จจึงรู้ผล ไม่ใด้เป็นคนแต่เป็นลิงยิ่งกว่าเดิม
        </p>
    </div>
  );
}

function Avatar() {
  return <img src="368557347_301908755796875_1580116528353255220_n.jpg" alt="PAI1" className="368557347_301908755796875_1580116528353255220_n.jpg" />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);

export default Full;