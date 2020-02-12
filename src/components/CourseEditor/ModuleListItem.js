import React from 'react'
import "./CourseEditor.css"
import {connect} from "react-redux";
import {MODULE_API_URL} from "../../common/constants";
import "../../stylesheets/coursehome.css";


class ModuleListItem  extends React.Component {
    state = {
        module: this.props.module
    };
    render() {
        return(
            <li
                onClick={this.props.select}
                className={`list-group-item ${this.props.active ? 'active':''}`}>
                
                {! this.props.editing && this.props.module.title}
                {this.props.editing &&
                    <input
                    onChange={(e) => this.setState({
                    module: {
                    ...this.state.module,
                    title: e.target.value
                }
                })}
                    value={this.state.module.title}/>
                }
                {this.props.editing &&
                 <span>
         <button  onClick={() =>
             this.props.deleteModule(this.props.module._id)} aria-label="Close" className="close wbdv-module-item-delete-btn" type="button">
            <span aria-hidden="true">{String.fromCharCode(215)}</span>
         </button>

          <button className="btn-remove wbdv-button wbdv-save-course wbdv-edit-course-right"
                  onClick={(e) => {
                      this.props.save();
                      this.props.updateModule(this.props.module._id, this.state.module);
                      this.props.refresh();
                      this.props.refresh();
                  }}><i className="material-icons size">done</i>
          </button>
        </span>}
                {!this.props.editing &&
                 <button onClick={this.props.edit}
                         className="btn-remove wbdv-button wbdv-edit-course wbdv-edit-course-right">
                     <i className="material-icons">
                         edit
                     </i>
                 </button>
                }
            </li>
        )

    }

}

const stateToPropertyMapper = (state) => ({})
const dispatchToPropertyMapper = (dispatch) => ({
    deleteModule: (moduleId) => {
        fetch(`${MODULE_API_URL}/${moduleId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status => dispatch({
                                         type: 'DELETE_MODULE',
                                         moduleId: moduleId
                                     }))
    },
        updateModule: (moduleId,module) => {
            fetch(`${MODULE_API_URL}/${moduleId}`, {
                method: "PUT",
                body: JSON.stringify(module),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json()).then(status => dispatch({
                                             type: 'UPDATE_MODULE',
                                             module: module,
                                             moduleId:moduleId
                                         }))}
}

)

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListItem)
