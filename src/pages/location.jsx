import React from "react";
import { Outlet } from "react-router-dom"


function Location() {
    


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

export default Location;
