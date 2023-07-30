import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputReducer } from "./redux/inputReducer";
import { inputText } from "./redux/action";

const Title = (props) => {
  const dispatch = useDispatch(inputReducer);
   const text = useSelector(state => {
    console.log('state', state);
    return state.inputReducer.text
   })
  const handleChange = (e) => {
    dispatch(inputText(e.target.value) )
    console.log(e.target.value);
  };
  return (
    <div className="w-full p-4 flex justify-start">
      <input className="w-full border-t-0 border-r-0 border-l-0 border-b border-gray-300 bg-white text-black py-2 px-4 focus:ring-0  focus:border-b focus:border-blue-500 focus:outline-none" type="text" onChange={handleChange} value={text} />
    </div>
  );
};

export default Title;
