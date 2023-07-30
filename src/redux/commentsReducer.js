import React from "react";
import {
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
  COMMENTS_SHOW,
} from "./types";

const initialState = {
  commentsShow: false,
  comments: [],
};
export const commentsReducer = (state = initialState, action) => {
  console.log("commentsReducer >", action);
  switch (action.type) {
    case COMMENTS_SHOW:
      return {
        ...state,
        commentsShow: !state.commentsShow,
      };
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
        commentsShow: true
      };

    case COMMENTS_LOAD:
      const getComments = action.data.map((item) => {
        return {
          text: item.name,
          id: item.id,
        };
      });
      return {
        ...state,
        comments:getComments
      };

    case COMMENT_UPDATE:
      const itemIndex = state.comments.findIndex((item) => {
        return item.id === action.data.id;
      });

      const nextComment = [
        ...state.comments.slice(0, itemIndex),
        action.data,
        ...state.comments.slice(itemIndex + 1),
      ];
      return {
        ...state,
        comments: nextComment,
      };
    case COMMENT_DELETE:
      const findItem = state.comments.filter((item) => {
        return item.id !== action.id;
      });
      return {
        ...state,
        comments: findItem,
      };
    default:
      return state;
  }
};
