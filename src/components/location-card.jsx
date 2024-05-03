import React from "react";
import { NavLink } from "react-router-dom";

function LocationCard({ loc }) {
    
    

    return (

        <>
        <NavLink to={`/location/${loc.id}`} > 
            <div className="" >
                <img  className="object-cover w-full h-full rounded" src={loc.image} alt={loc.name} />
                <h2 className="">{loc.name}
                    
                </h2>
                <p>{loc.prix}</p>

            </div>
            </NavLink>

            
        </>
    )

}
export default LocationCard