import React from "react";
import { useState , useEffect } from "react";
import Datamaison from "../data/data.json";
import HouseList from "../components/house-list";
function Vente() {

    // const [data, setData]= useState([])

    // useEffect(() => {
    //         fetch('src/data/data.json')
    //           .then(response => response.json())
    //           .then(data => setData(data.maison));
    //       }, []);

                
    return (
        <>
        <h1 className="p-5">Choisissez votre bien à acheter</h1>

        <HouseList />
        </>
    )    
}

export default Vente;
