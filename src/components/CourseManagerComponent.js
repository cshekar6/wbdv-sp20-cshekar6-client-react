import React from "react";
import CourseManagerHeading from "./CourseManagerHeading";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import CourseEditor from "./CourseEditor/CourseEditor";
import CourseManagerHeader from "./CourseManagerHeader";
import {deleteCourse, createCourse, findAllCourses} from "../services/CourseService"
import {} from "../stylesheets/coursehome.css"

class CourseManagerComponent extends React.Component {
    state = {
        layout: 'table',
        editingCourse: false,
        courses: []
    }

    componentDidMount = () => {
         findAllCourses()
             .then(courses => this.setState({
                 courses: courses
             }))
    }

    deleteCourse = async (deletedCourse) => {
        const status = await deleteCourse(deletedCourse._id)
        const courses = await findAllCourses()
        this.setState({
                          courses: courses
                      })
    }

    display = () => {
        findAllCourses()
            .then(courses => this.setState({
                                               courses: courses
                                           }))
    }

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
    }

    showCourseEditor = () =>
        this.setState({
                          editingCourse: true
                      })

    hideCourseEditor = () =>
        this.setState({
                          editingCourse: false
                      })

    render() {
        return (
            <div>
                <CourseManagerHeader display={this.display}/>
                {
                    this.state.editingCourse
                    && <CourseEditor hideCourseEditor={this.hideCourseEditor}/>
                }
                {!this.state.editingCourse &&
                 <div className="table-active ">
                     <div className="container-fluid">
                     <CourseManagerHeading/>
                     {this.state.layout === 'table' &&
                      <CourseTableComponent
                          showCourseEditor={this.showCourseEditor}
                          deleteCourse={this.deleteCourse}
                          courses={this.state.courses}
                          display={this.display}/>}
                     {this.state.layout === 'grid' && <CourseGridComponent courses={this.state.courses}/>}
                 </div>
                 </div>
                }
            </div>
        )
    }
}
export default CourseManagerComponent