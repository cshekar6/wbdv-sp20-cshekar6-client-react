import React from "react";

const CourseManagerHeading = ({toggle}) =>
    <thead className="thead-dark">
    <tr className="wbdv-row wbdv-course">
        <th className="wbdv-header wbdv-title">Title</th>
        <th className="d-none d-sm-table-cell wbdv-header wbdv-owner">
            <select id="ownSelect" className="form-control">
                <option>Owned By</option>
            </select>
        </th>
        <th className="d-none d-md-table-cell wbdv-header wbdv-last-modified">Last modified
        </th>
        <th className="wbdv-button wbdv-grid-layout">
            <button onClick={toggle} className={"btn-remove"}>
                <i className="material-icons">view_module</i>
            </button>

            <i className="pl-3 material-icons ">sort_by_alpha</i>
        </th>
    </tr>
    </thead>;

export default CourseManagerHeading