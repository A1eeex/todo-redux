import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentUpdate, commentDelete } from "./redux/action";
const SingleComment = ({ commentData }) => {
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    if (commentText.trim() !== "") {
      dispatch(commentUpdate(commentText, commentData.id));
    } else {
      dispatch(
        commentUpdate(
          "You must either delete or enter information",
          commentData.id
        )
      );
      setCommentText("You must either delete or enter information ");
    }
  };

  useEffect(() => {
    if (commentData.text) {
      setCommentText(commentData.text);
    }
  }, [commentData.text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(commentData.id));
  };
  return (
    <form className="flex p-1" onSubmit={handleUpdate}>
      <div onClick={handleDelete} className="mr-2">
        &times;
      </div>
      <input onChange={handleInput} type="text" value={commentText} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
