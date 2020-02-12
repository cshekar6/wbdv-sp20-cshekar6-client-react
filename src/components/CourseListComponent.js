import CourseManagerHeader from "./CourseManagerHeader";
import CourseManagerHeading from "./CourseManagerHeading";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import React from "react";

const CourseListComponent = ({
                              toggle,
                              layout,
                              courses,
                              deleteCourse,
                              display,
                              showCourseEditor
                             }) =>
<div>
    <CourseManagerHeader display={display}/>
    <div className="table-active ">
        <div className="container-fluid">
            <table className="table table-striped table-hover table-light">
                <CourseManagerHeading toggle={toggle}/>

                {
                    layout === 'table' &&
                 <CourseTableComponent
                     showCourseEditor={showCourseEditor}
                     deleteCourse={deleteCourse}
                     courses={courses}
                     display={display}/>}

            </table>
            {
                layout === 'grid' &&
             <CourseGridComponent courses={courses}
                                  deleteCourse={deleteCourse}/>
            }

            <button className="btn-remove bottom-right">
                <i className="fas fa-2x fa-plus-circle"></i>
            </button>

        </div>
    </div>
</div>

export default CourseListComponent