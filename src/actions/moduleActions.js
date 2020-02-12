export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE";
export const findModulesForCourse = (modules) => ({
    modules: modules,
    type: FIND_MODULES_FOR_COURSE
});


export const CREATE_MODULE = "CREATE_MODULE";
export const createModule = (module) => ({
    type: CREATE_MODULE,
    module: module
});

export const DELETE_MODULE = "DELETE_MODULE";
export const UPDATE_MODULE = "UPDATE_MODULE";