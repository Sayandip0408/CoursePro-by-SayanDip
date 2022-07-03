import React from "react";

function msg_sent(){
    var x = document.getElementById('txt_area').value;
    if(x == "")
        alert("Write a message!")
    else
        alert("Your message has been sent. 🤗");
}

function Contact() {
    return (
        <section id="contact">
            <div id="contact_div">
                <h1>Get a quote</h1>
                <p>Fill up the form and our Team will get back to you within 24 hours.</p>
                <div id="form_div">
                    <label>Your Name</label>
                    <div className="text_div">
                        <button><i class="far fa-user"></i></button>
                        <input type={"text"} placeholder={"Enter name"} />
                    </div>
                    <label>Mail</label>
                    <div className="text_div">
                        <button><i class="far fa-envelope"></i></button>
                        <input type={"email"} placeholder={"Enter Mail"} />
                    </div>
                    <label>Message</label>
                    <div id="text_area_div">
                        <textarea placeholder="Message" id="txt_area"></textarea>
                    </div>
                    <button id="send_msg" onClick={msg_sent}>Send Message <i class="far fa-paper-plane"></i></button>
                </div>
                
            </div>
        </section>
    );
}

export default Contact;