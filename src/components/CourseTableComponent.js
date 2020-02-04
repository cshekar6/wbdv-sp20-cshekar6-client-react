import React from "react";
import CourseTableRow from "./CourseTableRow";

const CourseTableComponent = ({courses, deleteCourse, showCourseEditor,display}) =>
    <div>
        <table className="table table-striped table-hover table-light">
            <tbody>
            {
                courses.map(function(course, index) {
                    return <CourseTableRow
                        showCourseEditor={showCourseEditor}
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}
                        display={display}/>
                })
            }
            </tbody>
        </table>
    </div>
export default CourseTableComponent