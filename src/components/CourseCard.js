import React from 'react'

const CourseCard = ({course, deleteCourse}) =>
    <div className="card col-sm-6 col-md-4 col-lg-3 col-xl-2 col-12 pl-2">
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body bg-light text-dark">
            <h6 className="card-title">{course.title}</h6>
            <p className="card-text text-warning">This is the Description of the card. </p>
            <button className="btn-remove wbdv-button wbdv-add-course">
                <i onClick={() => deleteCourse(course)}
                   className="material-icons">
                    delete
                </i></button>
        </div>
    </div>;

export default CourseCard;