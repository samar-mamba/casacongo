import React from "react";
import { NavLink } from "react-router-dom";
function HouseCard({ house }) {
    
    

    return (

        <>
        <NavLink to={`/vente/${house.id}`} > 
            <div className="" >
                <img  className="object-cover w-full h-full rounded" src={house.image} alt={house.name} />
                <h2 className="">{house.name}
                    
                </h2>
                <p>{house.prix}</p>

            </div>
            </NavLink>

            
        </>
    )

}
export default HouseCard