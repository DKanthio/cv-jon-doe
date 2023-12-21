import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../App.css'; 

const Realisations = () => {
  const projetsData = [
    {
      id: 1,
      title: "Mon Cv",
      date: "02/10/2023",
      technologies: "HTML, CSS",
      github: "https://github.com/DKanthio/devoir-Cv"
    },
    {
      id: 2,
      title: "Cahier Des Charges",
      date: "05/10/2023",
      technologies: "Powerpoint",
      github: "https://github.com/DKanthio/Cahiercharge"
    },
    {
      id: 3,
      title: "Dynamiser un espace commentaire",
      date: "31/10/2023",
      technologies: "HTML, CSS, Javascript",
      github: "https://github.com/DKanthio/commentaire"
    },
    {
      id: 4,
      title: "Maquetter avec figma",
      date: "16/11/2023",
      technologies: "Figma",
      github: "https://github.com/DKanthio/Maquette"
    },
  ];

  return (
    <div>
      <h1>Portfolio de John Doe</h1>
      <div className="row">
        {projetsData.map((projet) => (
          <div key={projet.id} className="col-md-4 mb-3">
            <Card style={{
              width: '18rem',
              margin: '1rem',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              borderRadius: '8px',
              fontFamily: 'Arial, sans-serif',
              backgroundColor: '#f9f9f9',
              color: '#333'
            }}>
              <Card.Body>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{projet.title}</Card.Title>
                <Card.Text style={{ fontSize: '1rem' }}>
                  Date de création : {projet.date}
                  <br />
                  Technologies utilisées : {projet.technologies}
                </Card.Text>
                {projet.github && (
                  <Button href={projet.github} target="_blank" style={{
                    backgroundColor: '#007bff',
                    borderColor: '#007bff',
                    color: '#fff',
                    padding: '5px 10px',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    borderRadius: '5px'
                  }}>
                    Repository GitHub
                  </Button>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realisations;
