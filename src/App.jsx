import "./App.css";
import Comments from "./Comments";
import Likes from "./Likes";
import Title from "./Title";

function App() {

  return (
    <div className="container m-auto p-4">
      <div className="flex flex-col items-center justify-start ">
        <img className="rounded-xl" src="./sea.jpg" alt="img" />
        <Title />
        <Likes />
      </div>
      
      <Comments />
    </div>
  );
}

export default App;
