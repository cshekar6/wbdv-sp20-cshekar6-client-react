import React from "react";
import {createCourse, findAllCourses, updateCourse} from "../services/CourseService";

class AddCourse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newCourseTitle: 'New Course'
        }
    }
    updateForm = (e) =>
        this.setState({
                          newCourseTitle: e.target.value
                      })

    addCourse = () =>
    {
        const newCourse = {
            title: this.state.newCourseTitle
        }
        const actualCourse = createCourse(newCourse)
        const allCourse = findAllCourses()
        const temp = this.props.display()
    }

    render() {
        return (
        <div className="row pl-3">
            <div className="pl-3 col-md-9 col-sm-9 col-9">
                <input className="form-control wbdv-field wbdv-new-course wbdv-course"
                       id="courseTitle"
                       placeholder="New Course Title"
                       onChange={this.updateForm}
                       value={this.state.newCourseTitle}
                />
            </div>

            <div className="col-md-3 col-sm-3 col-3">
                <button onClick={this.addCourse} className="btn-remove wbdv-button wbdv-add-course">
                    <i className="fas fa-2x fa-plus-circle"/>
                </button>
            </div>
        </div>
        )}
}
export default AddCourse;