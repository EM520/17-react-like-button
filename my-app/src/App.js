import logo from './logo.svg';
import './App.css';
import React,{ useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSmileWink} from "@fortawesome/free-solid-svg-icons"

 


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
      <FontAwesomeIcon 
      icon= {faSmileWink} 
      className="yellowFace" />
    </div>
  );
}

export default App;
