import React from 'react'

const LessonTab = ({lesson}) =>
    <li className="nav-item">
        <a className={lesson._id === '456' ? 'active nav-link' : 'nav-link'}>
            {lesson.title}
        </a>
    </li>;
export default LessonTab