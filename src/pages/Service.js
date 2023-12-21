import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faSearch, faCode, faSync, faTools, faComments } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; 

const Services = () => {
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

  const servicesList = [
    { title: "Conception de sites web personnalisés", description: "Création de sites web sur mesure en utilisant des technologies modernes et des designs réactifs.", icon: faLaptop },
    { title: "Optimisation SEO", description: "Amélioration du classement des sites web dans les moteurs de recherche pour augmenter leur visibilité en ligne.", icon: faSearch },
    { title: "Développement d'applications web", description: "Création d'applications web interactives et conviviales pour répondre aux besoins spécifiques des clients.", icon: faCode },
    { title: "Refonte et amélioration de sites web existants", description: "Modernisation de sites web obsolètes pour les rendre plus attrayants, fonctionnels et conformes aux normes actuelles.", icon: faSync },
    { title: "Maintenance et support technique", description: "Fourniture d'un service continu de maintenance pour garantir le bon fonctionnement des sites web et résoudre les problèmes techniques.", icon: faTools },
    { title: "Consultation en stratégie web", description: "Conseils sur les meilleures pratiques web, les dernières tendances technologiques et les stratégies pour améliorer la présence en ligne.", icon: faComments },
  ];

  const handleMouseEnter = (index) => {
    setHoveredServiceIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredServiceIndex(null);
  };

  return (
    <div>
       <h1>Services de John Doe</h1>
      <div className="card-container">
        {servicesList.map((service, index) => (
          <Card
            key={index}
            style={{ width: '18rem', margin: '1rem' }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon
                  icon={service.icon}
                  style={{
                    marginRight: '10px',
                    color: hoveredServiceIndex === index ? '#cde1f8' : '' 
                  }}
                />
                {service.title}
              </Card.Title>
              <Card.Text>{service.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;