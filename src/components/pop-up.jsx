import React, { useState } from 'react';

const ConnexionReussiePopUp = () => {
  const [visible, setVisible] = useState(false);

  const fermerPopUp = () => {
    setVisible(false);
  };

  return (
    <div className="pop-up" style={{ display: visible ? 'block' : 'none' }}>
      <h2>Connexion réussie!</h2>
      <p>Bienvenue!</p>
      <button onClick={() => fermerPopUp()}>Fermer</button>
    </div>
  );
};

export default ConnexionReussiePopUp;
