import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { decrementLikes, incrementLikes } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { IS_DISLIKED, IS_LIKED } from "../redux/types";
const Likes = () => {
  const dispatch = useDispatch();

  const likes = useSelector((state) => {
    return state.likeReducer.likes;
  });
  const dislikes = useSelector((state) => {
    return state.likeReducer.dislikes;
  });
  const userReaction = useSelector((state) => {
    return state.likeReducer.userReaction;
  });

  const handleAddLike = (e) => {
    e.preventDefault();
    dispatch(incrementLikes());
  };
  const handleAddDislike = (e) => {
    e.preventDefault();
    dispatch(decrementLikes());
  };
  return (
    <div className="w-full flex justify-center items-center gap-6">
      <div>
        <button
          className={`${
            userReaction === IS_LIKED ? "text-blue-700" : "text-black"
          }`}
          onClick={handleAddLike}
        >
          <AiFillLike />
        </button>
        <div>{likes}</div>
      </div>
      <div>
        <button
          className={`${
            userReaction === IS_DISLIKED ? "text-red-700" : "text-black"
          }`}
          onClick={handleAddDislike}
        >
          <AiFillDislike />
        </button>
        <div>{dislikes}</div>
      </div>
    </div>
  );
};
export default Likes;
