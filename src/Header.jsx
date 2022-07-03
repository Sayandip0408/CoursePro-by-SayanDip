import React from "react";
import img1 from "./student_img.jpeg";
import img2 from "./student_img_2.jpeg";
import img3 from "./student_img_3.jpeg";
import img4 from "./student_img_4.jpeg";

function join(){
    alert("Congratulations, you've joined CoursePro! 🥳")
}

function course_btn(){
    window.location.href = "#courses";
}

function Header() {
    return (
        <header className="header" id="header">
            <section className="header_sec" id="header_sec_text">
                <h3>100% satisfaction guarantee</h3>
                <p className="header_sec_h1">Providing the <strong>best</strong> learning experience </p>
                <p className="header_sec_p">Private, 1-on-1 lessons with the expert instructor based on your goals and interests.</p>
                <div>
                    <button className="join_btn" onClick={join}>join for free</button>
                    <button className="courses_btn" onClick={course_btn}>courses</button>
                </div>
            </section>
            <section className="header_sec" id="header_sec_img">
                <img src={img3} id="img3" className="header_sec_img_cls" />
                <img src={img4} id="img4" className="header_sec_img_cls" />
                <img src={img2} id="img2" className="header_sec_img_cls" />
                <img src={img1} id="img1" className="header_sec_img_cls" />
            </section>
        </header>
    );
}

export default Header;