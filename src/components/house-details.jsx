import React from "react";
import Datamaison from "../data/data.json";
import { useParams } from "react-router-dom"


function HouseDetails() {
    const Data = Datamaison.maison
    const useparam = useParams()
    const { id } = useparam

    const house = Data.find((house) => house.id === +id)
    

    return (
        <>

        <img src={house.image} alt={house.name} />
        <h2 className="">{house.name}</h2>
        <p>{house.prix}</p>
        <p> {house.description} </p>


        </>
    )
    
}

export default HouseDetails