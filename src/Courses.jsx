import React from "react";
import ds from "./ds.jpeg";
import cpp from "./cpp.jpeg";
import java from "./java.jpeg";
import python from "./python.jpeg";
import react_js from "./react_js.png";
import angular from "./angular.jpeg";

const course_data = [
    {
        src: ds ,
        title: "Data Structure",
        price: "₹899",
        desc: "A data structure is a particular way of organizing data in a computer so that it can be used effectively.",
        alt : "img1"
    },
    {
        src: cpp,
        title: "C/C++ Programming",
        price: "₹599",
        desc: "C++ is a powerful general-purpose programming language. It is used to develop operating systems.",
        alt : "img2"
    },
    {
        src: python,
        title: "Python Programming",
        price: "₹899",
        desc: "Python is used successfully in thousands of real-world business applications around the world.",
        alt : "img3"
    },
    {
        src: java,
        title: "Java Programming",
        price: "₹799",
        desc: "Java is a popular programming language, created in 1995. More than 3 billion devices run Java.",
        alt : "img4"
    },
    {
        src: react_js,
        title: "React JS",
        price: "₹1099",
        desc: "React makes it painless to create interactive UIs. Design simple views for each state in application.",
        alt : "img5"
    },
    {
        src: angular,
        title: "Angular JS",
        price: "₹1099",
        desc: "AngularJS is a toolset for building the framework most suited to your application development.",
        alt : "img6"
    },
]

function buy(){
    alert("Congratulations, You got access to this course! 🥳")
}

function course_fun(val) {
    return (
        <div className="course">
            <img src={val.src} alt={val.alt} />
            <h3>{val.title}</h3>
            <p>{val.desc}</p>
            <h2>{val.price}</h2>
            <button className="buy_btn" onClick={buy}>Buy</button>
        </div>
    );
}

function Courses() {
    return (
        <section className="courses" id="courses">
        <p className="headline"><strong>Courses</strong> we offer</p>
            {course_data.map(course_fun)}
        </section>
    );
}

export default Courses;