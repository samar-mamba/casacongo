import React from "react";


function Footer() {

    return (
        <>
        <div className="flex gap-2">
            <div> 
            <h4>Mieux nous connaitre</h4>
            <a href="#"><p>Qui sommes nous?</p></a>
            <a href="#"><p>Nous rejoindre</p></a>
            <a href="#"><p>Nos engagements</p></a>
            </div>
            <div> 
            <h4>INFORMATIONS LÉGALES</h4>
            <a href="#"><p>Conditions générales d’utilisation</p></a>
            <a href="#"><p>Référencement et classement des annonces</p></a>
            <a href="#"><p>Conditions générales de vente</p></a>
            <a href="#"><p>Vos droits et obligations</p></a>
            </div>
        </div>
        </>
    )
    
}

export default Footer;