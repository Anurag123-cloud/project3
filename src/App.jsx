import { useState } from "react";
import StartGame from "./component/StartGame";
import PlayGame from "./component/PlayGame";

function App() {
 const [isGameStarted, getGameStarted ]=useState()
 
 const toogleGameStart=()=>{
  getGameStarted((prev)=>!prev)
 }
  return (
    <div>
     {isGameStarted ? <PlayGame/> : <StartGame toggle={toogleGameStart} />}
    </div>
  )
}

export default App;

