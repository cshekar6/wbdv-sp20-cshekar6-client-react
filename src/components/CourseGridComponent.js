import React from 'react'
import CourseCard from "../components/CourseCard";

const CourseGridComponent = ({courses, deleteCourse}) =>
    <div className="container-fluid mt-5">
        <div className="container row">
            {
                courses.map((course, index) =>
                                (<CourseCard
                                    deleteCourse={deleteCourse}
                                    key={index}
                                    course={course}/>)
                )
            }
        </div>
    </div>;

export default CourseGridComponent