import React, { useState } from 'react';
import '../App.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div style={{
      backgroundImage: 'url("https://cdn.pixabay.com/photo/2015/11/03/09/01/business-card-1019948_1280.jpg")',
      backgroundSize: 'cover',
      backgroundColor: '#EEE', 
      fontFamily: 'Nunito Sans, sans-serif',
      padding: '20px',
      marginTop: '20px', 
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', 
      borderRadius: '8px', 
      color: '#444' 
    }}>
      <h1 style={{ color: '#1e1e1e' }}>Contactez John Doe</h1>
      <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">E-mail :</label>
            <input type="email" id="email" name="email" va-lue={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="phone">Numéro de téléphone :</label>
            <input type="tel" id="phone" name="phone" va-lue={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="subject">Sujet :</label>
            <input type="text" id="subject" name="subject" va-lue={formData.subject} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit">Envoyer</button>

        </form>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#1e1e1e' }}>Coordonnées de John Doe :</h2>
        <p>1 Rue de la Légion d'Honneur</p>
        <p>0606060606</p>
        <p>Google Map :</p>
        <iframe
          title="Google Maps"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAaEXGDOfW_x5dylkx47ZSJFxi-EWfUSMI&q=1%20Rue%20de%20la%20L%C3%A9gion%20d'Honneur`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
