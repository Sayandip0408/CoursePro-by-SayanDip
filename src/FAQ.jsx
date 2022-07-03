import React from "react";

const faq_data = [
    {
        q: "What about the relationship between student and tutor online?",
        a: "Many of our tutors say they have some of their best working relationships with students they have never met in person. The reason for this is that students say that they feel more comfortable in raising questions to the tutor through online tutoring, partly because they are in their own home environment which feels more relaxed, and partly because it is less intimidating than asking questions in person."
    },
    {
        q: "Is the online tutoring technology hard to use?",
        a: "Children are often familiar with online platforms and might, especially after COVID-19, have used something similar at school. Our tutors have lots of experience teaching online and will spend time familiarising your child with the relevant software. It might take them a couple of lessons to get completely used to it, but they usually become experts very quickly!"
    },
    {
        q: "Do students maintain their focus online?",
        a: "Concerns about distractions are often unfounded as the student and tutor face each other directly on the screen (as opposed to sitting side by side) which, if anything, tends to keep the student even more focused. Most online whiteboards also have editing privileges which the tutor can control and ensure students are paying attention to the right areas at the right time. Introducing a variety of mini tasks is easy to do and keeps children engaged throughout the lesson. Many students say that they find online lessons more engaging given the range of resources at the tutor’s disposal."
    },
    {
        q: "How will we receive feedback if we don’t meet the tutor?",
        a: "Our tutors are happy to schedule a mutually convenient time to speak to parents after the first lesson and on an ongoing basis to replace the after lesson catch-up. Keystone also has a monthly reporting system used to update parents on an ongoing basis, which is received via email. If there are follow up questions the tutor or client manager can be contacted for further feedback."
    }
]



function faq_fun(val) {
    return (
        <div className="faq">
            <p className="faq_q">{val.q}</p>
            <p className="faq_a">{val.a}</p>
        </div>
    );
}

function FAQ() {
    return (
        <section className="faq_sec" id="faq">
            <h1>Frequently Asked Questions</h1>
            <div className="faq_list">
                {faq_data.map(faq_fun)}
            </div>
        </section>
    );
}

export default FAQ;