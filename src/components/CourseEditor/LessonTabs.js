import React from "react";
import {connect} from "react-redux";
import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../../common/constants";
import "../../stylesheets/coursehome.css"

class LessonTabs extends React.Component {

    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.moduleId !== prevProps.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId)
        }
    }

    state = {
        selectedLessonId: '',
        editingLessonId: '',
        lesson: {
            title: '',
            _id: ''
        }
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                     <li className="nav-item"
                         onClick={() => this.setState(
                             {
                                 selectedLessonId: lesson._id
                             })}
                         key={lesson._id}>
                         <a className={`nav-link ${(this.state.editingLessonId === lesson._id || this.state.selectedLessonId === lesson._id) ? 'active' : ''}`}>
                             {this.state.editingLessonId !== lesson._id &&
                              <span>{lesson.title}</span>}
                             {this.state.editingLessonId === lesson._id &&
                              <input
                                  onChange={(e) => {
                                      const newTitle = e.target.value
                                      this.setState(
                                          prevState => ({
                                              lesson: {
                                                  ...prevState.lesson,
                                                  title: newTitle
                                              }
                                          }))
                                  }}
                                  value={this.state.lesson.title}/>}
                             {
                                 this.state.editingLessonId === lesson._id &&
                                 <button className="btn-remove wbdv-button wbdv-save-course"
                                         onClick={() => {
                                             this.props.updateLesson(
                                                 this.state.lesson)
                                                  this.setState(
                                                               {
                                                                   editingLessonId: ''
                                                               })
                                             this.componentDidMount()
                                             this.componentDidMount()

                                         }
                                         }><i className="material-icons size">done</i>
                                 </button>
                             }
                             {
                                 this.state.editingLessonId === lesson._id &&
                                 <button aria-label="Close" className="close wbdv-module-item-delete-btn" type="button"
                                 onClick={ () => this.props.deleteLesson(lesson._id)}>
                                 <span aria-hidden="true">{String.fromCharCode(215)}</span>
                                 </button>
                             }

                             {
                                 this.state.editingLessonId !== lesson._id &&
                                 <button className="btn-remove wbdv-button wbdv-edit-course wbdv-edit-course-right"
                                     onClick={() => {
                                         this.setState({
                                                           lesson: lesson,
                                                           editingLessonId: lesson._id
                                                       })
                                     }}>
                                     <i className="material-icons">
                                         edit
                                     </i>
                                 </button>
                             }
                         </a>
                     </li>)
                }
                <li className="nav-item">
                    <button className="btn topic-adder-btn" onClick={() => this.props.addLesson(this.props.moduleId)}>
                        <i className="fas fa-plus"></i></button>
                </li>
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findLessonsForModule: moduleId =>
        fetch(MODULES_LESSONS_API_URL(moduleId))
            .then(response => response.json())
            .then(lessons => dispatcher({
                                            type: 'FIND_LESSONS_FOR_MODULE',
                                            lessons: lessons
                                        })),
    updateLesson: (lesson) => {
        fetch(`${LESSONS_API_URL}/${lesson._id}`, {
            method: "PUT",
            body: JSON.stringify(lesson),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then( actualLesson => dispatcher({
         type: 'UPDATE_LESSON',
         lesson: actualLesson,
        lessonId: actualLesson._id
       }))
    },
    addLesson: (moduleId) =>
        fetch(MODULES_LESSONS_API_URL(moduleId), {
            method: 'POST',
            body: JSON.stringify({title: 'New Lesson'}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualLesson =>
                      dispatcher({
                                     type: 'CREATE_LESSON',
                                     lesson: actualLesson
                                 })),
    deleteLesson: (lessonId) =>
        fetch(`${LESSONS_API_URL}/${lessonId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status =>
                      dispatcher({
                                     type: 'DELETE_LESSON',
                                     lessonId: lessonId
                                 })),
    findAllLessons: () =>
        fetch(LESSONS_API_URL)
            .then(response => response.json())
            .then(lessons =>
                      dispatcher({
                                     type: 'FIND_ALL_LESSONS',
                                     lessons: lessons
                                 })
            )
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(LessonTabs)