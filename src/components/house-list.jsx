import React from "react";
import { useState , useEffect } from "react";
import Datamaison from "../datas/data.json";
import HouseCard from "./house-card";
import axios from "axios";


function HouseList() {
    // const Data = Datamaison.maison lien axios:src/datas/data.json"

// importation de données avec axios


const [house, setHouse]= useState([]);
    useEffect(() => {
        axios.get("src/datas/data.json")
        .then(response => {
           setHouse(response.data)
        })
        .catch(error => {
           console.error("Erreur lors de la récupération des house:" ,error)
        });
}, [])

console.log(house)

    const Data = house
    console.log(Data);
//     const data = Data.maison
//     console.log("voici les msons" ,data);
// Data.maison && Data.maison.map
    return (
        <>
        <h1 className="p-5 font-bold">Choisissez votre Maison à acheter</h1>
        <div className="grid grid-cols-3 gap-4 grid-rows-3 sm:grid-cols-2  md:grid-cols-3 ">
            

            { Data.maison && Data.maison.map(house=>(

              <HouseCard key={house.id} house={house} />
            ))}

       </div>

        

        </>
    )
    
}

export default HouseList