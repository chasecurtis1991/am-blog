import * as actions from './actionTypes';

export const getCurrentDate = () => {

    let date = new Date()
    // Get date with format: MM/DD/YYYY with a long month name. Example: "January 1, 2018"
    let longDate = date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    // Get time with format: HH:MM AM/PM. Example: "12:00 AM"
    let time = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

    console.log(longDate + ' at ' + time);
    return longDate + ' at ' + time;
}

export const postAdded = (title, content) => ({
    type: actions.POST_ADDED,
    payload: {
        id: Math.random(),
        title,
        content,
        date: getCurrentDate(),
    }
});

export const commentAdded = (name, comment) => ({
    type: actions.POST_ADDED,
    payload: {
        id: Math.random(),
        name,
        comment,
        date: getCurrentDate(),
    }
});