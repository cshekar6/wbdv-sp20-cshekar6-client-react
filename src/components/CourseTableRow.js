import React from "react";
import {updateCourse} from "../services/CourseService";

class CourseTableRow extends React.Component {
    state = {
        editing: false,
        course: this.props.course
    };
    render() {
        return (
            <tr>
                {
                    !this.state.editing &&
                    <td>
                        <i className="material-icons"
                           style={{background: "blue", color: "white"}}>subject</i>
                        <a href="#" onClick={this.props.showCourseEditor}>
                            {this.props.course.title}
                        </a>
                    </td>
                }

                {
                    this.state.editing &&
                    <td>
                        <i className="material-icons"
                           style={{background: "blue", color: "white"}}>subject</i>
                        <input
                            onChange={(e) => this.setState({
                                                               course: {
                                                                   ...this.state.course,
                                                                   title: e.target.value
                                                               }
                                                           })}
                            value={this.state.course.title}/>
                    </td>
                }

                <td className="d-none d-sm-table-cell wbdv-row wbdv-owner">
                    me
                </td>
                <td className="d-none d-md-table-cell wbdv-row wbdv-modified-date">
                    {new Date().toLocaleTimeString()}
                </td>
                {!this.state.editing &&
                 <td>
                     <button onClick={() => this.setState({
                                                              editing: true
                                                          })}
                             className="btn-remove wbdv-button wbdv-add-course">
                         <i className="material-icons">
                             edit
                         </i>
                     </button>

                     <button className="btn-remove wbdv-button wbdv-add-course">
                         <i onClick={() => this.props.deleteCourse(this.props.course)}
                            className="material-icons">
                             delete
                         </i></button>
                 </td>
                }
                {
                    this.state.editing &&
                    <td>
                        <button className="btn-remove wbdv-button wbdv-add-course"
                                onClick={(e) => {
                                    updateCourse(this.state.course._id, this.state.course)
                                        .then(() => {
                                            this.props.display()
                                        });
                                    this.setState({
                                                      editing: false
                                                  })
                                }}><i className="material-icons">done</i>

                        </button>

                    </td>
                }
            </tr>

        )
    }
}

export default CourseTableRow