import React from "react";
import { useState , useEffect } from "react";
import Datamaison from "../datas/data.json";
import HouseCard from "./house-card";


function HouseList() {
    const Data = Datamaison.maison

    // const [data, setTweets] = useState([]);
    // useEffect(() => {
    //         fetch('src/datas/data.json')
    //           .then(response => response.json())
    //           .then(data => setTweets(data.maison));
    //       }, []);

    //       const Data = data.maison


    return (
        <>
        <h1 className="p-5 font-bold">Choisissez votre Maison à acheter</h1>
        <div className="grid grid-cols-3 gap-4 grid-rows-3 sm:grid-cols-2  md:grid-cols-3 ">
            

            {Data.map(house=>(

              <HouseCard key={house.id} house={house} />
            ))}

       </div>

        

        </>
    )
    
}

export default HouseList