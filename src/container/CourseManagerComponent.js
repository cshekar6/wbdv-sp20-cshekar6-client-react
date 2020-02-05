import React from "react";
import CourseManagerHeading from "../components/CourseManagerHeading";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditor from "../components/CourseEditor/CourseEditor";
import CourseManagerHeader from "../components/CourseManagerHeader";
import {deleteCourse, findAllCourses} from "../services/CourseService";
import CourseEditorHeader from "../components/CourseEditor/CourseEditorHeader";
import "../stylesheets/coursehome.css"

class CourseManagerComponent extends React.Component {
    state = {
        layout: 'table',
        editingCourse: false,
        courses: []
    };

    componentDidMount = () => {
        findAllCourses()
            .then(courses => this.setState({
                                               courses: courses
                                           }))
    };

    deleteCourse = (deletedCourse) => {
        deleteCourse(deletedCourse._id).then(
            this.display
        );

    };

    display = () => {
        findAllCourses()
            .then(courses => this.setState({
                                               courses: courses
                                           }))
    };

    toggle = () => {
        this.setState((prevState) => {
            if (prevState.layout === 'grid') {
                return {
                    layout: 'table'
                }
            } else {
                return {
                    layout: 'grid'
                }
            }
        })
    };

    showCourseEditor = () =>
        this.setState({
                          editingCourse: true
                      });

    hideCourseEditor = () =>
        this.setState({
                          editingCourse: false
                      });

    render() {
        return (
            <div>
                {
                    this.state.editingCourse
                    &&
                    <div>
                    <CourseEditorHeader/>
                    <CourseEditor hideCourseEditor={this.hideCourseEditor}/>
                    </div>
                }
                {
                    !this.state.editingCourse &&
                    <div>
                    <CourseManagerHeader display={this.display}/>
                    <div className="table-active ">
                        <div className="container-fluid">
                            <table className="table table-striped table-hover table-light">
                                <CourseManagerHeading toggle={this.toggle}/>

                                {this.state.layout === 'table' &&
                                 <CourseTableComponent
                                     showCourseEditor={this.showCourseEditor}
                                     deleteCourse={this.deleteCourse}
                                     courses={this.state.courses}
                                     display={this.display}/>}
                            </table>
                            {this.state.layout === 'grid' &&
                             <CourseGridComponent courses={this.state.courses}
                                                  deleteCourse={this.deleteCourse}/>
                            }

                        </div>
                    </div>
                    </div>
                }
            </div>
        )
    }
}

export default CourseManagerComponent