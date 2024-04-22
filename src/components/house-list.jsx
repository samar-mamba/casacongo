import React from "react";
import { useState , useEffect } from "react";
import Datamaison from "../data/data.json";



function HouseList() {
    const Data = Datamaison.maison


    return (
        <>
        <div>
            <ul className="flex flex-col gap-5 justify-around flex-wrap"> 
                {Data.map((list)=>(
                    <li key={list.id} className="flex gap-5">
                       <img src= {list.image} alt="" /> 
                       <p className="flex flex-col">{list.name} 
                       <span>{list.prix} </span>
                       </p>
                       
                       </li>
                    
                ))}
        
            </ul>
        </div>

        </>
    )
    
}

export default HouseList