import * as actions from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.POST_ADDED:
      return [
        ...state,
        {
            // id: action.id,
            title: action.title,
            content: action.content,
            date: action.date,
        }
    ];
    case actions.COMMENT_ADDED:
      return [
        ...state,
        {
            // id: action.id,
            name: action.name,
            comment: action.comment,
            // date: action.date,
        }
    ];
    default:
      return state;
  }
}