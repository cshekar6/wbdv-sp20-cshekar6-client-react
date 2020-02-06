import React from "react";
import CourseTableRow from "./CourseTableRow";
import "../stylesheets/coursehome.css"

const CourseTableComponent = ({courses, deleteCourse, showCourseEditor, display}) =>
    <tbody>
    {
        courses.map(function (course, index) {
            return <CourseTableRow
                showCourseEditor={showCourseEditor}
                deleteCourse={deleteCourse}
                key={course._id}
                course={course}
                display={display}/>
        })
    }
    </tbody>;
export default CourseTableComponent