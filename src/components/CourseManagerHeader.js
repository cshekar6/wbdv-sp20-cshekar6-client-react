import React from "react";
import AddCourse from "./AddCourse";

const CourseManagerHeader = ({display}) =>
<nav className="navbar navbar-dark bg-primary">
    <div className="container-fluid">

        <div className="col-md-1 mr-col-sm-1 col-1" float="left">
            <button className="navbar-toggler wbdv-field wbdv-hamburger " type="button"
                    data-toggle="collapse" data-target="#navbarContent"
                    aria-controls="navbarContent" aria-expanded="true"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/></button>
        </div>

        <div className="col-md-2 d-none d-lg-block">
            <label className="navbar-brand wbdv-label wbdv-course-manager">Course Manager</label>
        </div>

        <div className="col-md-9 col-sm-11 col-10">
            <AddCourse display={display}/>
        </div>

    </div>
</nav>

export default CourseManagerHeader;