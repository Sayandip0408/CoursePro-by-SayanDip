import React from "react";

function NavbarUl() {
    return (
        <div className="nav_ul_sec">
            <ul className="nav_ul">
                <li id="home_nav"><a href="#header">Home</a></li>
                <li id="services_nav"><a href="#services">Services</a></li>
                <li id="coursec_nav"><a href="#courses">Courses</a></li>
                <li id="faq_nav"><a href="#faq">FAQ</a></li>
                <li id="contact_nav"><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
    );
}

export default NavbarUl;