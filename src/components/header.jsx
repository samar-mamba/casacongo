import React from "react";


function Header() {

    return (
        <>
        <div className="flex flex-row justify-around items-center bg-[#1ACB6B] ">
            <p className="text-orange-500">CongoCasa</p>
            <button className="bg-orange-500 hover:bg-cyan-600">Deposer une annonce</button>
            <button>Se connecter</button>
        </div>
        
        </>
    )
    
}

export default Header;