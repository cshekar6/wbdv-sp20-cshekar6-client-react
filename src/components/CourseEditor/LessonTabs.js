import React from 'react'
import LessonTab from "./LessonTab";

const LessonTabs = ({lessons}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map((lesson, index) =>
                            <LessonTab
                                lesson={lesson}
                                key={index}/>
            )
        }
        <li className="nav-item">
            <div className="topic-add">
                <button className="btn topic-adder-btn">
                    <i className="fas fa-plus"></i></button>
            </div>
        </li>
    </ul>;

export default LessonTabs