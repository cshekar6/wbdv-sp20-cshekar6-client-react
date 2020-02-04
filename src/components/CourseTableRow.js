import React from "react";

class CourseTableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return(
                <tr>
                    <td><i className="material-icons"
                           style={{background:"blue", color:"white"}}>subject</i>
                        {this.props.course.title}
                    </td>
                    <td className="d-none d-sm-table-cell wbdv-row wbdv-owner">
                        me
                    </td>
                    <td className="d-none d-md-table-cell wbdv-row wbdv-modified-date">
                        {new Date().toLocaleTimeString()}
                    </td>
                    <td>
                        <button onClick={() => this.props.deleteCourse(this.props.course)}
                                className="btn text-danger fa fa-2x fa-trash"></button>
                    </td>
                </tr>

                )
    }
}


export default CourseTableRow