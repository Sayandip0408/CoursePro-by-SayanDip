import React from "react";
import NavbarUl from "./NavbarUl";
import show from "./script";

function sign(){
    alert("Do not sign in or sign up, we will steal your data. 😈")
}

function Navbar() {
    return (
        <nav>
            <button id="nav_menu" onClick={show}><i class="fas fa-bars"></i></button>
            <div className="logo_sec">
                <button className="logo_text">
                    <span><i class="fas fa-book-reader"></i></span> CoursePro.
                </button>
            </div>
            <NavbarUl />
            <div className="sign">
                <button className="signin" onClick={sign}>Sign In</button>
                <button className="signup" onClick={sign}>Sign Up</button>
            </div>
        </nav>
    );
}

export default Navbar;

