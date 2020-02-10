import {MODULE_API_URL, LESSONS_API_URL} from "../common/constants";

export const createLesson = (moduleId,lesson) => {
    fetch(`${MODULE_API_URL}/${moduleId}/lessons`,{
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
};

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULE_API_URL}/${moduleId}/lessons`)
        .then(response => response.json());

export const findLesson = (lessonId) =>
    fetch(`${LESSONS_API_URL}/${lessonId}`).then(response => response.json());

export const updateLesson = (lessonId, lesson) =>
    fetch(`${LESSONS_API_URL}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());

export const deleteLesson = (lessonId) =>
    fetch(`${LESSONS_API_URL}/${lessonId}`, {
        method: "DELETE"
    })
        .then(response => response.json());

export default {
    createLesson,
    findLessonsForModule,
    findLesson,
    updateLesson,
    deleteLesson
}