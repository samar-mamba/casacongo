import React from "react";
import { NavLink } from "react-router-dom";
import connection from "../assets/single.png"
import Buton from "./buton";
import {useNavigate} from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login-form');
    }

    return (
        <>

        <div className=" z-50 bg-white flex flex-col  "> 
        <div className="flex flex-row justify-around items-center  p-5 ">
        <NavLink className="" to="/"> <p className="text-orange-500 ">CongoCasa</p></NavLink>
            <Buton></Buton>

            <div className="flex   align-center gap-2 border-white border-b-2 hover:border-b-2 hover:border-orange-500 ">
            <img className="w-5 " src={connection} alt="" />
            <button onClick={handleClick} className="">
            Se connecter
            </button>
            
            </div>
           
        </div>
        <div className="">
            <ul className="flex flex-row justify-around bg-orange-500 p-5 text-white ">
                <li className="border-orange-500 border-b-2 hover:border-b-2 hover:border-white"> <NavLink to="/">Accueil</NavLink></li>
                <li className="border-orange-500 border-b-2 hover:border-b-2 hover:border-white"><NavLink to="/vente">Vente</NavLink></li>
                <li className="border-orange-500 border-b-2 hover:border-b-2 hover:border-white"><NavLink to="/location">Location</NavLink></li>
            </ul>
        </div>
        </div>

        {/* essaie du responsive */}
        
        
        </>
    )
    
}

export default Header;