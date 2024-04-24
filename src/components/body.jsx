import React from "react";
// import maison from "..images/maison-contemporaine.webp"
import Buton from "./buton";

function Body() {

    return (
        <> 
        
         
            <img className="h-96 w-full" src="src\images\maison-contemporaine.webp" alt="maison hero" />
            <div className=""> 
            <div className="flex flex-col content-center p-5 justify-center gap-5 font-sans">
            <div className="flex flex-col gap-5 content-center justify-around ">
            <h1 className="font-bold" >Vendre son appartement ou sa maison plus rapidement !</h1>
            <p>Afin de vous aider à mettre en vente votre appartement ou votre maison,  
                nous vous invitons à déposer une annonce gratuite pour votre bien immobilier,
                cela ne vous prendra pas plus de 2 minutes et vous toucherez ainsi nos centaines de milliers de visiteurs chaque mois. 
                Nous diffusons toutes les annonces immobilières entre particuliers 
                 mais nous vous informons également que nous diffusons toutes les annonces immobilières des agences immobilières</p>

        </div>
         <Buton/> 
         <div className="flex flex-col gap-5 content-center justify-around ">
            <h1 className="font-bold" >Déposer une annonce immobilière gratuite ?</h1>
            <p>C'est l'essence même du site CasaCongo, pour offrir à nos internautes en recherche d'une petite annonce immobilière un large choix,
                 nous vous proposons de mettre vos petites annonces gratuites. 
                 Vous pourrez deposer une annonce en 2 minutes, celle-ci sera publiée quelques 
                 heures après sa validation parmi nos annonces immobilières gratuites.
                  Qu'il s'agisse de vendre son appartement rapidement ou de mettre en location sa maison,
                   la première étape consiste à bien rédiger votre annonce immobilière !
    Pour mettre une annonce immobilière gratuite sur CasaCongp il vous faut d'abord vous assurer 
    que celle-ci se situe a ki,shasa, en effet pour le moment, nous ne diffusons pas 
        de petites annonces en dehors.

</p>

        </div>

         </div>
         </div>
        </>
        
    )
    
}

export default Body