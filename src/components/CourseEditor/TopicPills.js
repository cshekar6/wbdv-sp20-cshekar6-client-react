import React from 'react'
import {createTopic, deleteTopic, findTopicsForLesson} from "../../services/TopicService"
import {LESSONS_TOPICS_API_URL, TOPIC_API_URL} from "../../common/constants";
import {connect} from "react-redux";

class TopicPills extends React.Component {
    componentDidMount() {
        this.props.findTopicsForLesson(this.props.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.lessonId !== prevProps.lessonId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }

    state = {
        selectedTopicId: '',
        editingTopicId: '',
        topic: {
            title: '',
            id: ''
        }
    }

    render() {
        return (
            <div className="topics mt-4">
                <ul className="nav nav-pills wbdv-topic-pill-list">
                    {
                        this.props.topics && this.props.topics.map((topic) =>
                           <li className="nav-item wbdv-topic-pill"
                               onClick={() => {
                                   this.props.history.push(`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`)
                                   this.setState(
                                   {
                                       selectedTopicId: topic.id
                                   })}}
                               key={topic.id}>
                               <a className={`nav-link ${(this.state.editingTopicId
                                                          === topic.id
                                                          || this.state.selectedTopicId
                                                          === topic.id)
                                                         ? 'active'
                                                         : ''}`}>
                                   {this.state.editingTopicId !== topic.id &&
                                    <span>{topic.title}</span>}
                                   {this.state.editingTopicId === topic.id &&
                                    <input
                                        onChange={(e) => {
                                            const newTitle = e.target.value
                                            this.setState(
                                                prevState => ({
                                                    topic: {
                                                        ...prevState.topic,
                                                        title: newTitle
                                                    }
                                                }))
                                        }}
                                        value={this.state.topic.title}/>}
                                   {
                                       this.state.editingTopicId === topic.id &&
                                       <button
                                           className="btn-remove wbdv-button wbdv-save-course"
                                           onClick={() => {
                                               this.props.updateTopic(
                                                   this.state.topic)
                                               this.setState(
                                                   {
                                                       topic: topic,
                                                       editingTopicId: ''
                                                   })
                                           }
                                           }>
                                           <i className="material-icons size">done</i>
                                       </button>
                                   }
                                   {
                                       this.state.editingTopicId === topic.id &&
                                       <button
                                           aria-label="Close"
                                           className="close wbdv-module-item-delete-btn"
                                           type="button"
                                           onClick={() => {
                                               this.props.deleteTopic(topic.id).then()
                                           }
                                           }>
                                           <span
                                               aria-hidden="true">{String.fromCharCode(
                                               215)}</span>
                                       </button>
                                   }

                                   {
                                       this.state.editingTopicId !== topic.id &&
                                       <button
                                           className="btn-remove wbdv-button wbdv-edit-course wbdv-edit-course-right"
                                           onClick={() => {
                                               this.props.history.push(`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`)
                                               this.setState(
                                                   {
                                                       topic: topic,
                                                       editingTopicId: topic.id
                                                   })
                                           }}>
                                           <i className="material-icons">
                                               edit
                                           </i>
                                       </button>
                                   }
                               </a>
                           </li>
                        )
                    }
                    <li className="nav-item">
                        <div className="topic-add wbdv-topic-add-btn">
                            <button className="btn topic-adder-btn"
                                    onClick={() => this.props.addTopic(this.props.lessonId)}>
                                <i className="fas fa-plus"></i></button>
                        </div>
                    </li>
                </ul>
            </div>)
    }
}

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findTopicsForLesson: lessonId =>
        fetch(LESSONS_TOPICS_API_URL(lessonId))
            .then(response => response.json())
            .then(topics => dispatcher({
                                           type: 'FIND_TOPICS_FOR_LESSON',
                                           topics: topics
                                       })),
    updateTopic: (topic) => {
        fetch(`${TOPIC_API_URL}/${topic.id}`, {
            method: "PUT",
            body: JSON.stringify(topic),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(actualTopic => dispatcher({
                                                                                type: 'UPDATE_TOPIC',
                                                                                topic: actualTopic,
                                                                                topicId: actualTopic.id
                                                                            }))
    },

    addTopic: (lessonId) =>
        createTopic(lessonId, {title: 'New Topic'})
            .then(actualTopic =>
                      dispatcher({
                                     type: 'CREATE_TOPIC',
                                     topic: actualTopic
                                 })),
    deleteTopic: (topicId) =>
        deleteTopic(topicId).then(status =>
                                      dispatcher({
                                                     type: 'DELETE_TOPIC',
                                                     topicId: topicId
                                                 })),
    findAllTopics: (lessonId) =>
        findTopicsForLesson(lessonId)
            .then(topics =>
                      dispatcher({
                                     type: 'FIND_ALL_TOPICS',
                                     topics: topics
                                 })
            )
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(TopicPills)

