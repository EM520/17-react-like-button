import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from "react"


function App() {
  const [count, setCount] = useState(0);
  const [text,setText] = useState("likes")
  useEffect(() => {
    count==1?
      setText("like"):setText("likes")
  });
  // function handleClick() {
  //   setText(count+1);
  // }
  return (
    <div className="App">
      {/* <button id="btn" onClick={handleClick}>{text}</button> */}
      <button id="btn" onClick={()=>setCount(count+1) }>{count}{text}</button>
    </div>
  );
}

export default App;
