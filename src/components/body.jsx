import React from "react";
// import maison from "..images/maison-contemporaine.webp"
import Buton from "./buton";

function Body() {

    return (
        <> 
        
            <img className="h-96 w-full" src="src\images\maison-contemporaine.webp" alt="maison hero" />
            <div className="flex flex-col gap-5 content-center justify-around ">
            <h1 >Vendre son appartement ou sa maison plus rapidement !</h1>
            <p>Afin de vous aider à mettre en vente votre appartement ou votre maison,  
                nous vous invitons à déposer une annonce gratuite pour votre bien immobilier,
                cela ne vous prendra pas plus de 2 minutes et vous toucherez ainsi nos centaines de milliers de visiteurs chaque mois. 
                Nous diffusons toutes les annonces immobilières entre particuliers 
                 mais nous vous informons également que nous diffusons toutes les annonces immobilières des agences immobilières</p>

        </div>
         <Buton/> 

        </>
        
    )
    
}

export default Body