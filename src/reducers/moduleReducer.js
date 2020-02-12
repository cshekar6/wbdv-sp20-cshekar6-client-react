import {CREATE_MODULE, FIND_MODULES_FOR_COURSE,DELETE_MODULE,UPDATE_MODULE}
from "../actions/moduleActions";


const moduleReducer = (state = {modules: []}, action) => {
    switch(action.type) {
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules
            }

        case UPDATE_MODULE:
            return {
                modules: state.modules
            }

        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module =>
                                                  module._id !== action.moduleId
                )
            }
        default:
            return state
    }
}

export default moduleReducer