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
        <div className="yl-10 px-6 py-12 lg:px-8 ">
            <div className="container h-full px-36 ">
        
        <Outlet />
        </div>
        </div>
        </>
    )    
}

export default Vente;
