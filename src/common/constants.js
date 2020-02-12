export const API_URL = "https://wbdv-generic-server.herokuapp.com/api/cshekar86/courses";
export const MODULE_API_URL = "https://wbdv-generic-server.herokuapp.com/api/cshekar86/modules";
export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/cshekar86/lessons";
export const TOPIC_API_URL = "https://wbdv-generic-server.herokuapp.com/api/cshekar86/topics";
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/jannunzi/modules/${moduleId}/lessons`
export const LESSONS_TOPICS_API_URL = (lessonId) => `https://wbdv-generic-server.herokuapp.com/api/jannunzi/lessons/${lessonId}/topics`
export const DEFAULT_CLASS_SIZE = 50;