import React, { useRef } from 'react';
import photo from '../assets/Images/photo.jpeg';
import GitHubProfile from './GitHubProfile';
import '../App.css'; 

const Accueil = () => {
  const skills = [
    { skill: 'HTML', level: 90 },
    { skill: 'CSS', level: 85 },
    { skill: 'JS', level: 65 },
    { skill: 'React-JS', level: 70 },
  ];

  const aboutRef = useRef(null);

  const handleShowAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
    <div className="background-image" style={{
      backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_1280.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
      position: 'relative',
    }}>
      <div className="overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.3,
      }}></div>
      <h1 style={{ zIndex: 1, position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', color: '#FFF' }}>John Doe</h1>
      <h2 style={{ zIndex: 1, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#FFF' }}>Développeur Web</h2>
      <button onClick={handleShowAbout} style={{ zIndex: 1, position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}>En savoir plus</button>
    </div>

    <div ref={aboutRef} className="about-section" style={{ marginTop: '50px', fontFamily: 'Nunito Sans', color: '#444' }}>
      <h3 style={{ color: '#1e1e1e' }}>À propos de John Doe</h3>
      <img
        src={photo}
        alt="John Doe"
        style={{ width: '200px', height: 'auto', borderRadius: '50%' }} 
      />
      <h4 style={{ color: '#1e1e1e' }}>Compétences</h4>
      <div className="progress">
        {skills.map((item, index) => (
          <div key={index} className="progress-bar" style={{ width: `${item.level}%` }}>
            {item.skill}
          </div>
        ))}
      </div>
    </div>
    <GitHubProfile />
  </div>
  );
};

export default Accueil;
