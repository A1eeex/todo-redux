import "./App.css";
import Modal from "./atom/Modal";
import Comments from "./components/Comments";
import Likes from "./components/Likes";
import Title from "./components/Title";

function App() {

  return (
    <div className="container m-auto p-4">
      <div className="flex flex-col items-center justify-start ">
        <img className="rounded-xl" src="./sea.jpg" alt="img_main" />
        <Title />
        <Likes />
        
      </div>
      
      <Comments />
    </div>
  );
}

export default App;
