import React from "react";
import { NavLink } from "react-router-dom";
import connection from "../assets/single.png"

function Header() {

    return (
        <>
        <div className="flex flex-row justify-around items-center  p-5 ">
            <p className="text-orange-500">CongoCasa</p>
            <button className="bg-orange-500 hover:bg-orange-700 rounded-md p-1 ">Deposer une annonce</button>

            <div className="flex   align-center gap-2 border-white border-b-2 hover:border-b-2 hover:border-orange-500 ">
            <img className="w-5 " src={connection} alt="" />
            <button className="">
            

                Se connecter</button>   


            </div>
            
        
            
        </div>
        <div className="">
            <ul className="flex flex-row justify-around bg-orange-500 p-5 text-white ">
                <li className="border-orange-500 border-b-2 hover:border-b-2 hover:border-white"> <NavLink to="/">Accueil</NavLink></li>
                <li className="border-orange-500 border-b-2 hover:border-b-2 hover:border-white"><NavLink to="/vente">Vente</NavLink></li>
                <li className="border-orange-500 border-b-2 hover:border-b-2 hover:border-white"><NavLink to="/location">Location</NavLink></li>
            </ul>
        </div>
        
        </>
    )
    
}

export default Header;