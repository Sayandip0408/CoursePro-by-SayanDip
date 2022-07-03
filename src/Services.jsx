import React from "react";

const card_data = [
    {
        btn : "fas fa-user-friends",
        id : "btn_1",
        heading : "One-on-One Teaching",
        p : "All of our special education experts have a degree in special education."
    },
    {
        btn : "fas fa-clock",
        id : "btn_2",
        heading : "24/7 Tutor Availability",
        p : "24/7 tutor availability at CoursePro matched to your learning style!"
    },
    {
        btn : "fas fa-chalkboard-teacher",
        id : "btn_3",
        heading : "Interactive Whiteboard",
        p : "Our special digital whiteboard equipped with audio-video-chat features."
    },
    {
        btn : "fas fa-rupee-sign",
        id : "btn_4",
        heading : "Affordable Prices",
        p : "choose an experienced teacher that fits in your budget. Keep trust on us."
    },
]

function cards_fun(val){
    return (
        <div className="card">
            <button className="card_btn" id={val.id}><i class={val.btn}></i></button>
            <h3 className="card_h3">{val.heading}</h3>
            <p className="card_p">{val.p}</p>
        </div>
    );
}


function Services() {
    return (
        <section className="service" id="services">
            <div className="service_texts">
                <h3>Why Choose us</h3>
                <p><strong className="strong">Benefits</strong> of online Tutoring Services <strong className="strong">at CoursePro</strong></p>
            </div>
            <div className="service_cards">
                {card_data.map(cards_fun)}
            </div>
        </section>
    );
}

export default Services;