import {connect} from "react-redux";
import service from "../services/ModuleService";
import {findModulesForCourse, createModule} from "../actions/moduleActions";
import ModuleList from "../components/CourseEditor/ModuleList";

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules
})

const dispatchToPropertyMapper = (dispatch) => ({
    createModule: (courseId, module) =>
        service.createModule(courseId, module)
            .then(response =>
                      dispatch(createModule(response))),

    findModulesForCourse: (courseId) =>
        service.findModuleForCourse(courseId)
            .then(modules =>
                      dispatch(findModulesForCourse(modules)))
})

const ModuleListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleList)

export default ModuleListContainer