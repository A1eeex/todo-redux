import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate, commentLoad, commentShow } from "../redux/action";
import { commentsReducer } from "../redux/commentsReducer";
import Modal from '../atom/Modal'
const Comments = () => {
  const id = Math.floor(Math.random() * 99999);
  const [textComment, setTextComment] = useState("");
  const [modalEmptyComment, setModalEmptyComment] = useState(false);
  const dispatch = useDispatch(commentsReducer);

  const comments = useSelector((state) => {
    return state.commentsReducer.comments;
  });
  const commentsShow = useSelector((state) => {
    return state.commentsReducer.commentsShow;
  });
  const hangleInput = (e) => {
    setTextComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (textComment.trim() !== "") {
      dispatch(commentCreate(textComment, id));
    } else {
      setModalEmptyComment(true)
      console.log("eempty");
    }
  };
  const handleShowComments = (e) => {
    e.preventDefault();
    dispatch(commentShow());
  };
  useEffect(() => {
    dispatch(commentLoad());
  }, []);

  return (
    <div className=" pb-2">
      <form className="" onSubmit={handleSubmit}>
        <input
          className="w-full border border-gray-300 bg-white text-black py-2 px-4 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
          type="text"
          onChange={hangleInput}
          value={textComment}
          placeholder={"Add new comment"}
        />
        <input type="submit" hidden />
      </form>
      <button className="text-gray-400 pt-3" onClick={handleShowComments}>
        Show all comments:{comments.length}
      </button>
      {!!comments.length &&
        commentsShow &&
        comments.map((item, i) => <SingleComment key={i} commentData={item} />)}
      {modalEmptyComment && <Modal  setIsOpenModal={setModalEmptyComment} titleModal={`You cannot add an empty value`} />}
    </div>
  );
};
export default Comments;
