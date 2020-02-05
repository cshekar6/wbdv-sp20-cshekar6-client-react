import React from 'react'
import "./CourseEditor.css"

const ModuleListItem = ({module}) =>

    <li className={module._id === '345' ? 'active list-group-item active list-group-item-dark wbdv-module-item-title' :
    'list-group-item list-group-item-dark wbdv-module-item-title'}>
        {module.title}
        <button aria-label="Close" className="close wbdv-module-item-delete-btn" type="button">
            <span aria-hidden="true">{String.fromCharCode(215)}</span>
        </button>
    </li>

export default ModuleListItem