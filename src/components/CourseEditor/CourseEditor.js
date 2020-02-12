import React from 'react'
import LessonTabs from "../CourseEditor/LessonTabs";
import TopicPills from "../CourseEditor/TopicPills";
import "./CourseEditor.css"
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import {combineReducers, createStore} from "redux";

import ModuleListContainer from "../../container/ModuleListContainer";

const reducers = combineReducers({
                                     moduleReducer, lessonReducer
                                 })

const store = createStore(reducers);
const  CourseEditor  = ( {match, courseId, moduleId, history }) =>
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
                            moduleId={moduleId}
                        />
                        <TopicPills
                            topics={[
                                {_id: "123", title: "Topic1"},
                                {_id: "234", title: "Topic2"},
                                {_id: "345", title: "Topic3"},
                                {_id: "456", title: "Topic4"},
                                {_id: "567", title: "Topic5"},
                                {_id: "678", title: "Topic6"}
                            ]}

                        />
                    </div>
                </div>
            </div>
            </Provider>

export default CourseEditor