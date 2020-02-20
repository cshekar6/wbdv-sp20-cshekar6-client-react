import {WIDGET_API_URL,WIDGET_TOPIC_URL} from "../common/constants";
export const createWidget = (tid, widget) => {
 fetch(WIDGET_TOPIC_URL(tid), {
     method: "POST",
     body: JSON.stringify(widget),
     headers: {
         'Content-Type': 'application/json'
     }
 }).then(r => r.json())
}

export const findWidgetsForTopic =(tid) => {
    fetch(WIDGET_TOPIC_URL(tid)).then(r => r.json())
}

export const findAllWidgets = () => {
    fetch(WIDGET_API_URL).then(r=> r.json())
}

export const findWidgetById = (wid) => {
    fetch(`${WIDGET_API_URL}/${wid}`).then(r => r.json())
}

export const updateWidget = (wid, widget) => {
    fetch(`${WIDGET_API_URL}/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => r.json())
}

export const deleteWidget = (wid) => {
    fetch(`${WIDGET_API_URL}/${wid}`,{
        method:"DELETE"
    }).then(r => r.json())
}



