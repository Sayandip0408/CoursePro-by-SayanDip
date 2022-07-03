import React from "react";

function showAlert(){
    alert("Hey dear user, given details are fake. 😇");
}

function facebook(){
    window.location.href = "https://www.facebook.com/sayandip.adhikary.96";
}
function instagram(){
    window.location.href = "https://www.instagram.com/mr_adhikary794/";
}
function github(){
    window.location.href = "https://github.com/Sayandip0408?tab=repositories";
}


function Footer(){
    return (
        <footer>
        <div className="contact_info" id="contact_links">
                    <a onClick={showAlert}><i class="fas fa-phone-alt"></i> +0123 4567 8910</a>
                    <a onClick={showAlert}><i class="fas fa-envelope"></i> support@coursepro.com</a>
                    <a onClick={showAlert}><i class="fas fa-map-marker-alt"></i> CoursePro Headquarter, India</a>
                </div>
                <div className="contact_info">
                    <button onClick={facebook}><i class="fab fa-facebook"></i></button>
                    <button onClick={github}><i class="fab fa-github"></i></button>
                    <button onClick={instagram}><i class="fab fa-instagram"></i></button>
                </div>
            <p>SayanDip Adhikary © 2022 CoursePro, Inc. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;