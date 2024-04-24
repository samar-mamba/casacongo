import React from "react";
import { useState , useEffect } from "react";
import Datamaison from "../data/data.json";
import HouseCard from "./house-card";


function HouseList() {
    const Data = Datamaison.maison


    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">

            {Data.map(house=>(

              <HouseCard key={house.id} house={house} />
            ))}

       </div>
            {/* <ul className="flex flex-col gap-5 justify-around flex-wrap"> 
                {Data.map((list)=>(
                    <li key={list.id} className="flex gap-5">
                       <img src= {list.image} alt="" /> 
                       <p className="flex flex-col">{list.name} 
                       <span>{list.prix} </span>
                       </p>
                       
                       </li>
                    
                ))}
        
            </ul> */}

        

        </>
    )
    
}

export default HouseList