import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios"; 

function App() {
  const [data, setData] = useState([]);
   const [net, setNet] = useState(false);

   
  useEffect(() => {
    axios({
      method: "get",
      url: "https://pokeapi.co/api/v2/pokemon?limit=50",
    }).then(function (res) {
      setData(res?.data?.results);
    });
    
    const online = navigator.onLine;
    if(online){
    setNet(true);
    }else{
    setNet(false);
    }
  },[]);

  return (
    <> 
    <div style={net === true ? {width: '20px'; height:'20px';background-color:'green'; border-radius:'50%'} : {width: '20px'; height:'20px';background-color:'red'; border-radius:'50%'}}></div>
      <div
        style={{
          marginTop: "40px",
          justifyContent: "space-around",
          display: "flex",
          flexWrap: "wrap",
          width: "90%",
          margin: "auto",
        }}
      >
        {data?.map((poke, i) => {
          return (
            <div
              key={i}
              style={{
                width: "400px",
                height: "330px",
                border: "2px solid #000000",
                margin: "30px 10px",
              }}
            >
              <div style={{ padding: "5px 10px" }}>
                <p style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                  {" "}
                  {poke.name}
                </p>
              </div>
              <img
                style={{ height: "300px", width: "300px" }}
                alt="pokemon"
                src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}
              />
            </div>
          );
        })}
        <div></div>
      </div>
    </>
  );
}

export default App;
