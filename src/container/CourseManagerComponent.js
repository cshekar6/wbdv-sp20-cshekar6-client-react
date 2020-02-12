import React from "react";
import CourseEditor from "../components/CourseEditor/CourseEditor";
import {deleteCourse, findAllCourses} from "../services/CourseService";
import CourseEditorHeader from "../components/CourseEditor/CourseEditorHeader";
import "../stylesheets/coursehome.css";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import CourseListComponent from "../components/CourseListComponent";

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
             <Router>
                 <Route path="/course/:courseId"
                        render={(props) =>
                            <CourseEditorHeader/>
                        }/>

                <Route path="/course/:courseId"
                       exact={true}
                       render={(props) =>
                    <CourseEditor
                        {...props}
                        courseId={props.match.params.courseId}
                        hideCourseEditor={this.hideCourseEditor}/>
                }/>

                 <Route
                     path="/"
                     exact={true}
                     render={() =>
                         <CourseListComponent
                         toggle={ this.toggle}
                         layout={this.state.layout}
                         courses={this.state.courses}
                         deleteCourse={this.deleteCourse}
                         display={this.display}
                         showCourseEditor={this.showCourseEditor}/>
                     }/>

                 <Route
                     path="/course/:courseId/module/:moduleId"
                     exact={true}
                     render={(props) =>
                         <CourseEditor
                             {...props}
                             moduleId={props.match.params.moduleId}
                             courseId={props.match.params.courseId}
                             hideEditor={this.hideEditor}/>
                     }/>
                 <Route
                     path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                     exact={true}
                     render={(props) =>
                         <CourseEditor
                             {...props}
                             lessonId={props.match.params.lessonId}
                             moduleId={props.match.params.moduleId}
                             courseId={props.match.params.courseId}
                             hideEditor={this.hideEditor}/>
                     }/>

             </Router>
            </div>

        )
    }
}

export default CourseManagerComponent