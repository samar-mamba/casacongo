import React from "react";
import Datamaison from "../data/data.json";
import { useParams } from "react-router-dom"
import map from "../images/pin.png"


function HouseDetails() {
    const Data = Datamaison.maison
    const useparam = useParams()
    const { id } = useparam

    const house = Data.find((house) => house.id === +id)
    

    return (
        <>
        <div className="flex gap-5 "> 
        <div className="w-full"> 
        <img className="object-cover w-96 h-96 rounded" src={house.image} alt={house.name} />
        <h2 className="font-bold py-5 ">{house.name}</h2>
        <div className="border-2 rounded border-white-500  p-2 shadow-md"> 
        <div className="flex gap-5 py-2"> 
        <img className="w-8 h-8 " src={map} alt="logo map" />
        <p>{house.lieux}</p>
        </div>
        <p>{house.prix}</p>
        <h2 className="font-bold py-5">Description</h2>
        <p > {house.description} </p>
        </div>
        </div>
        <div className="shadow-md rounded w-full text-center "> 
        <h1 className=" font-bold p-5">Nos Contact</h1>
        <p>Pour écrire à l'annonceur :  </p>
        <p>{house.numero} </p>
        </div>

        </div>
        </>
    )
    
}

export default HouseDetails