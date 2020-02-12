import React from 'react'
import ModuleListItem from "./ModuleListItem";
import "./CourseEditor.css"

export default class ModuleList extends React.Component {

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId).then();
    }

    state = {
        "activeModuleId": this.props.moduleId,
        "editingModuleId": ''
    }

    render() {
        return (
            <ul className="list-group wbdv-module-list">
                {
                    this.props.modules && this.props.modules.map(module =>
                         <ModuleListItem
                             key={module._id}
                             edit={() => {
                                 const moduleId = module._id
                                 this.props.history.push(
                                     `/course/${this.props.courseId}/module/${moduleId}`)
                                 this.setState({
                                                   editingModuleId: module._id
                                               })
                             }}
                             select={() => {
                                 const moduleId = module._id
                                 this.props.history.push(
                                     `/course/${this.props.courseId}/module/${moduleId}`)
                                 this.setState({
                                                   activeModuleId: module._id
                                               })
                             }}
                             save={() => this.setState({
                                                           editingModuleId: ''
                                                       })}
                             editing={module._id
                                      === this.state.editingModuleId}
                             active={module._id
                                     === this.state.activeModuleId}
                             refresh={() => this.componentDidMount()}
                             module={module}/>)
                }
                <li className="list-group-item">
                    <button className="btn topic-adder-btn wbdv-module-item-add-btn topic-add"
                            onClick={() => this.props.createModule(this.props.courseId,
                                                              {title: 'New Module'})}>
                        <i className="fas fa-plus"></i>
                    </button>
                </li>
            </ul>
        )
    }
}