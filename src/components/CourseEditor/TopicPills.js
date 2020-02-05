import React from 'react'
import WidgetList from "./WidgetList";
import TopicPill from "./TopicPill";

const TopicPills = ({topics}) =>
    <div className="topics mt-4">
        <ul className="nav nav-pills wbdv-topic-pill-list">
            {
                topics.map((topics, index) =>
                               <TopicPill
                                   topic={topics}
                                   key={index}/>
                )
            }
            <li className="nav-item">
                <div className="topic-add wbdv-topic-add-btn">
                    <button className="btn topic-adder-btn">
                        <i className="fas fa-plus"></i></button>
                </div>
            </li>
        </ul>
        <WidgetList/>
    </div>;

export default TopicPills