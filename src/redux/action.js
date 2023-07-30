import {
  COMMENT_CREATE,
  DECREMENT,
  INCREMENT,
  INPUT_TEXT,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
  COMMENTS_SHOW,
} from "./types";

export function incrementLikes() {
  return {
    type: INCREMENT,
  };
}
export function decrementLikes() {
  return {
    type: DECREMENT,
  };
}
export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text: text,
  };
}
export function commentShow() {
  return {
    type: COMMENTS_SHOW,
  };
}
export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
}
export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
}
export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id,
  };
}
export function commentLoad() {
  return async (dispatch) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=10"
    );
    const jsonData = await response.json();
    dispatch({
      type: COMMENTS_LOAD,
      data: jsonData,
    });
  };
}
