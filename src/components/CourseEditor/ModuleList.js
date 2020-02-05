import React from 'react'
import ModuleListItem from "./ModuleListItem";
import "./CourseEditor.css"

const ModuleList = ({modules}) =>
    <ul className="list-group wbdv-module-list">

        {
            modules.map((module, index) =>
                            <ModuleListItem
                                key={index}
                                module={module}/>
            )
        }
    </ul>

export default ModuleList