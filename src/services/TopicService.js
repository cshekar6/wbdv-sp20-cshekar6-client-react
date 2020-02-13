import {LESSONS_API_URL,TOPIC_API_URL} from "../common/constants";

export const createTopic = (lessonId,topic) =>
    fetch(`${LESSONS_API_URL}/${lessonId}/topics`,{
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())


export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_API_URL}/${lessonId}/topics`)
        .then(response => response.json());

export const findTopic = (topicId) =>
    fetch(`${TOPIC_API_URL}/${topicId}`).then(response => response.json());

export const updateTopic = (topicId, topic) =>
    fetch(`${TOPIC_API_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());

export const deleteTopic = (topicId) =>
    fetch(`${TOPIC_API_URL}/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json());

export default {
    createTopic,
    findTopicsForLesson,
    findTopic,
    updateTopic,
    deleteTopic
}