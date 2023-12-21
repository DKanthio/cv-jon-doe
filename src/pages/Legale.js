import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const Legale = () => {
  return (
    <div className="container mt-5">
      <h1>Mentions Légales</h1>
      <div className="accordion" id="legalAccordion">
        {/* Section 1 - Éditeur du site */}
        <div className="card">
          <div className="card-header" id="editorHeading">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#editorCollapse"
                aria-expanded="true"
                aria-controls="editorCollapse"
              >
                Éditeur du site
              </button>
            </h2>
          </div>
          <div
            id="editorCollapse"
            className="collapse"
            aria-labelledby="editorHeading"
            data-parent="#legalAccordion"
          >
            <div className="card-body">
              <p>Nom de l'éditeur du site : [Nom de l'éditeur]</p>
              <p>Adresse : [Adresse]</p>
              <p>Contact : [Adresse email ou numéro de téléphone]</p>
              <p>Registre du commerce et des sociétés (RCS) : [Numéro RCS]</p>
            </div>
          </div>
        </div>

        {/* Section 2 - Hébergeur du site */}
        <div className="card">
          <div className="card-header" id="hostHeading">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#hostCollapse"
                aria-expanded="false"
                aria-controls="hostCollapse"
              >
                Hébergeur du site
              </button>
            </h2>
          </div>
          <div
            id="hostCollapse"
            className="collapse"
            aria-labelledby="hostHeading"
            data-parent="#legalAccordion"
          >
            <div className="card-body">
              <p>Nom de l'hébergeur du site : [Nom de l'hébergeur]</p>
              <p>Adresse : [Adresse]</p>
              <p>Contact : [Adresse email ou numéro de téléphone]</p>
            </div>
          </div>
        </div>

        {/* Section 3 - Crédits des images */}
        <div className="card">
          <div className="card-header" id="creditsHeading">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#creditsCollapse"
                aria-expanded="false"
                aria-controls="creditsCollapse"
              >
                Crédits des images
              </button>
            </h2>
          </div>
          <div
            id="creditsCollapse"
            className="collapse"
            aria-labelledby="creditsHeading"
            data-parent="#legalAccordion"
          >
            <div className="card-body">
              <p>Les images utilisées sur ce site proviennent de <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legale;
