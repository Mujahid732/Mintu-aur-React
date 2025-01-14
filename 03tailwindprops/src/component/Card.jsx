import React from "react"

function Card(props){
    console.log(props);
    return(
        <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3MZfSeFp21y_hzRY0dyyDrX8OpADMPlEDw&s"
            alt="nft-gif"
            width="300"
            height="100"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{props.username}</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>{props.email}</p>
            <button className="bg-green-400 text-black p-4 rounded-xl" >
                {props.btnText}
            </button>
          </div>
        </div>
      </div>
    )
}

export default Card