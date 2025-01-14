import { useState } from "react";
import './App.css';

function App() {
  const [color, setColor] = useState("olive");
  const [fontColor, setFontColor] = useState("black");


  return (
    <>
      <div
        className="flex flex-wrap justify-center items-center w-full h-screen bg-olive duration-200"
        style={{ background: color }}
      >
        <h1 className={`text-4xl font-mono font-black text-${fontColor}`}>Background Changer....</h1>
        <div className="font-sans fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="font-mono font-bold flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-xl">
            <button
              onClick={() => {
                setColor("red") 
                setFontColor("black")
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              red
            </button>

            <button
              onClick={() => {
                setColor("green") 
                setFontColor("black")
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => {
                setColor("blue") 
                setFontColor("black")
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => {
                setColor("white") 
                setFontColor("black")
              }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>

            <button
              onClick={() => {
                setColor("olive") 
                setFontColor("black")
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>

            <button
              onClick={() => {
                setColor("pink") 
                setFontColor("black")
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>

            <button
              onClick={() => {
                setColor("purple") 
                setFontColor("white")
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>

            <button
              onClick={()=>{
                setColor("black")
                setFontColor("white")
              }} // This button triggers colorSetting
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>

            <button
              onClick={() => {
                setColor("yellow") 
                setFontColor("black")
              }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>

            <button
              onClick={() => {
                setColor("lavender") 
                setFontColor("black")
              }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
