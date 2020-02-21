import React from 'react'
import LessonTabs from "../CourseEditor/LessonTabs";
import TopicPills from "../CourseEditor/TopicPills";
import WidgetLists from "./WidgetLists";
import "./CourseEditor.css"
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import widgetReducer from "../../reducers/widgetReducer";
import {combineReducers, createStore} from "redux";

import ModuleListContainer from "../../container/ModuleListContainer";
import topicReducer from "../../reducers/topicReducer";

const reducers = combineReducers({
                                     moduleReducer, lessonReducer,topicReducer,widgetReducer
                                 })

const store = createStore(reducers);
const  CourseEditor  = ( {match, courseId, moduleId, history,lessonId,topicId}) =>
            <Provider store={store}>
            <div>
                <div className="row toppad">
                    <div className="col-3 dark-background">
                        <ModuleListContainer
                            moduleId={moduleId}
                            history={history}
                            courseId={courseId}
                             />
                    </div>
                    <div className="col-9">
                        <LessonTabs
                            courseId={courseId}
                            history={history}
                            moduleId={moduleId}
                        />
                        <TopicPills
                            history={history}
                            moduleId={moduleId}
                            lessonId={lessonId}
                            courseId={courseId}
                        />
                        <WidgetLists
                            history={history}
                            moduleId={moduleId}
                            lessonId={lessonId}
                            courseId={courseId}
                            topicId={topicId}/>
                    </div>
                </div>
            </div>
            </Provider>

export default CourseEditor