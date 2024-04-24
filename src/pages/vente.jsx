import React from "react";
// import { useState , useEffect } from "react";
// import Datamaison from "../data/data.json";
// import HouseList from "../components/house-list";
import { Outlet } from "react-router-dom"
function Vente() {

    // const [data, setData]= useState([])

    // useEffect(() => {
    //         fetch('src/data/data.json')
    //           .then(response => response.json())
    //           .then(data => setData(data.maison));
    //       }, []);

                
    return (
        <> 
        <div className="p-5">
        <h1 className="p-5 font-bold">Choisissez votre Maison à acheter</h1>
        <Outlet />
        </div>
        </>
    )    
}

export default Vente;
