import React, {Component} from 'react'
import ModuleList from "../CourseEditor/ModuleList";
import LessonTabs from "../CourseEditor/LessonTabs";
import TopicPills from "../CourseEditor/TopicPills";
import "./CourseEditor.css"

export default class CourseEditor extends Component {
    render() {
        return (
            <div>
                <div className="row toppad">
                    <div className="col-3 dark-background">
                        <ModuleList
                            modules={[
                                {_id: "123", title: "CSS"},
                                {_id: "234", title: "HTML"},
                                {_id: "345", title: "React JS"},
                                {_id: "456", title: "Redux"},
                                {_id: "567", title: "JS"},
                                {_id: "678", title: "Angular"}
                            ]}/>
                        <div className="topic-add">
                            <button className="btn topic-adder-btn wbdv-module-item-add-btn">
                                <i className="text-white fas fa-plus"></i></button>
                        </div>

                    </div>
                    <div className="col-9">
                        <LessonTabs
                            lessons={[
                                {_id: "123", title: "Lesson1"},
                                {_id: "234", title: "Lesson2"},
                                {_id: "345", title: "Lesson3"},
                                {_id: "456", title: "Lesson4"},
                                {_id: "567", title: "Lesson5"},
                                {_id: "678", title: "Lesson6"}
                            ]}
                        />
                        <TopicPills
                            topics={[
                                {_id: "123", title: "Topic1"},
                                {_id: "234", title: "Topic2"},
                                {_id: "345", title: "Topic3"},
                                {_id: "456", title: "Topic4"},
                                {_id: "567", title: "Topic5"},
                                {_id: "678", title: "Topic6"}
                            ]}

                        />
                    </div>
                </div>
            </div>
        )
    }
}