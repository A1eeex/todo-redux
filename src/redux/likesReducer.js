import { DECREMENT, INCREMENT, IS_DISLIKED, IS_LIKED } from "./types";

const initialState = {
  likes: 99,
  dislikes: 3,
  userReaction: null,
};
export const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      if (state.userReaction === IS_LIKED) {
        return {
          ...state,
          likes: state.likes - 1,
          userReaction: null,
        };
      } else {
        return {
          ...state,
          likes: state.likes + 1,
          dislikes: state.userReaction === IS_DISLIKED ? state.dislikes - 1 : state.dislikes,
          userReaction: IS_LIKED,
        };
      }

    case DECREMENT:
      if (state.userReaction === IS_DISLIKED) {
        return {
          ...state,
          dislikes: state.dislikes - 1,
          userReaction: null,
        };
      } else {
        return {
          ...state,
          dislikes: state.dislikes + 1,
          likes: state.userReaction === IS_LIKED ? state.likes - 1 : state.likes,
          userReaction: IS_DISLIKED,
        };
      }
    default:
      return state;
  }
};
