import React from "react";


function Header() {

    return (
        <>
        <div className="flex flex-row justify-around items-center bg-green-300 p-5 ">
            <p className="text-orange-500">CongoCasa</p>
            <button className="bg-orange-500 hover:bg-orange-700 rounded-md p-1 ">Deposer une annonce</button>
            <button className="rounded-md">Se connecter</button>
        </div>
        <div className="">
            <ul className="flex flex-row justify-around bg-orange-500 p-5 text-white ">
                <li> <a href="#">Accueil</a></li>
                <li><a href="#">Vente</a></li>
                <li><a href="#">Location</a></li>
            </ul>
        </div>
        
        </>
    )
    
}

export default Header;