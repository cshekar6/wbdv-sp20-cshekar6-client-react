import {API_URL,MODULE_API_URL} from "../common/constants";

export const createModule = (courseId,module) =>
    fetch(`${API_URL}/${courseId}/modules`,{
        method: "POST",
            body: JSON.stringify(module),
            headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())


export const findModuleForCourse = (courseId) =>
    fetch(`${API_URL}/${courseId}/modules`)
        .then(response => response.json())

export const findModule = (moduleId) =>
    fetch(`${MODULE_API_URL}/${moduleId}`).then(response => response.json())

export const updateModule = (moduleId, module) =>
    fetch(`${MODULE_API_URL}/${moduleId}`, {
      method: "PUT",
        body: JSON.stringify(module),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${MODULE_API_URL}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    findModuleForCourse,
    deleteModule,
    createModule,
    findModule,
    updateModule
}