import React from "react";
import { useState , useEffect } from "react";
import Datamaison from "../datas/data.json";
import LocationCard from "./location-card";


function LocationList() {
    const Data = Datamaison.location


    return (
        <>
        <h1 className="p-5 font-bold">Choisissez votre Maison à louer</h1>
        <div className="grid grid-cols-3 gap-4 grid-rows-3 sm:grid-cols-2  md:grid-cols-3 ">
            

            {Data.map(loc=>(

              <LocationCard key={loc.id} loc={loc} />
            ))}

       </div>

        

        </>
    )
    
}

export default LocationList