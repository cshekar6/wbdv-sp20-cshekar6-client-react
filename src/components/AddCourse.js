import React from "react";

const AddCourse = () =>
<div className="row pl-3">
    <div className="pl-3 col-md-9 col-sm-9 col-9">
        <input className="form-control wbdv-field wbdv-new-course wbdv-course" id="courseTitle"
               placeholder="New Course Title"/>
    </div>

    <div className="col-md-3 col-sm-3 col-3">
        <button className="btn-remove wbdv-button wbdv-add-course">
         <i className="fas fa-2x fa-plus-circle"/>
        </button>
    </div>
</div>

export default AddCourse;