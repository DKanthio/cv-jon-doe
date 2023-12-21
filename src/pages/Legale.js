import React, { useState } from 'react';
import '../App.css'; 

const Legale = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [showHost, setShowHost] = useState(false);
  const [showCredits, setShowCredits] = useState(false);

  return (
    <div className="container mt-5">
      <h1>Mentions Légales</h1>

      {/* Section 1 - Éditeur du site */}
      <div>
        <h2 onClick={() => setShowEditor(!showEditor)}>Éditeur du site</h2>
        {showEditor && (
          <div>
            <p>Nom de l'éditeur du site : cv-john-doe</p>
            <p>Adresse : 1 Rue de la Légion d'Honneur</p>
            <p>Contact : 0606060606</p>
        
          </div>
        )}
      </div>

      {/* Section 2 - Hébergeur du site */}
      <div>
        <h2 onClick={() => setShowHost(!showHost)}>Hébergeur du site</h2>
        {showHost && (
          <div>
            <p>Nom de l'hébergeur du site : Github-Pages</p>
            <p>Adresse : <a href="https://github.com/" target="_blank" rel="noopener noreferrer">https://github.com/</a></p>
            <p>Contact : Via la plateforme GitHub</p>
          </div>
        )}
      </div>

      {/* Section 3 - Crédits des images */}
      <div>
        <h2 onClick={() => setShowCredits(!showCredits)}>Crédits des images</h2>
        {showCredits && (
          <div>
            <p>
              Les images utilisées sur ce site proviennent de{' '}
              <a
                href="https://pixabay.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Legale;
