import React from 'react'

const TopicPill = ({topic}) =>
    <li className="nav-item wbdv-topic-pill">
        <a href="#" className={topic._id==='345'? "nav-link btn active" : "nav-link btn btn-secondary"}>
            {topic.title}
        </a>

    </li>;

export default TopicPill