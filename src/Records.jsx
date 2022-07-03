import React from "react";

const record_data = [
    {
        num: 76000,
        text: "Success Stories"
    },
    {
        num: 1040,
        text: "Expert Instructor"
    },
    {
        num: 85680,
        text: "Hours Tutored"
    },
    {
        num: 43750,
        text: "Active Students"
    },
]

function record_fun(val) {
    return (
        <div className="record_div">
            <div className="record_numbers">{val.num}</div>
            <div>{val.text}</div>
        </div>
    );
}

function Records() {
    return (
        <section id="record">
            {record_data.map(record_fun)}
        </section>
    );
}

export default Records;