import React from "react";
import {useNavigate} from "react-router-dom";

function Buton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/form-annonce');
    }

    return(
        <>

        <button className="bg-orange-500 hover:bg-orange-600 rounded-md p-1 " onClick={handleClick}>Deposer une annonce</button>
        </>
    )
    
}

export default Buton