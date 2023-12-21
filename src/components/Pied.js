import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../App.css'; 


const Pied = ({ latestArticles }) => {
  const linkStyle = {
    color: '#0d6efd',
    textDecoration: 'none',
  };
  

  const socialIconStyle = {
    color: '#0d6efd',
    marginRight: '10px',
    fontSize: '1.5em',
  };

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      document.getElementById('back-to-top').style.display = 'block';
    } else {
      document.getElementById('back-to-top').style.display = 'none';
    }
  };

  window.addEventListener('scroll', handleScroll);

  const latestBlogArticles = [
    {
      title: "Introduction à l'intelligence artificielle dans le développement web",
      content: "Cet article offre un aperçu des applications de l'intelligence artificielle dans le domaine du développement web et ses avantages potentiels.",
      date:"11/10/2023",
      anchor: "article-5"
    },
    {
      title: "L'importance de l'accessibilité dans la conception de sites web",
      content: "Découvrez pourquoi l'accessibilité est cruciale dans la conception de sites web et comment créer des expériences inclusives pour tous les utilisateurs.",
      date:"11/11/2023",
      anchor: "article-6"
    },
  ];
  
  return (
    <footer style={{
      backgroundColor: '#EEE',
      color: '#444',
      fontFamily: 'Nunito Sans, sans-serif',
      padding: '20px',
      marginTop: '20px',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      borderRadius: '8px',
    }}>
      <div className="row">
        <div className="col-md-3">
          <p>John Doe</p>
          <p>1 Rue de la Légion d'Honneur</p>
          <p>0606060606</p>
          <div className="social-icons">
          <a href="https://github.com/DKanthio" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <FontAwesomeIcon icon={faGithub} style={{ color: '#0d6efd' }} />
            </a>
           
            <a href="https://twitter.com/KanthioDoucoure" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#0d6efd' }} />
            </a>
            <a href="https://www.linkedin.com/in/kanthio-doucour%C3%A9-05787b29b/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0d6efd' }} />
            </a>
          </div>
        </div>
        
        <div className="col-md-3">
          <h4>Dernières réalisations</h4>
          <p><a href="https://github.com/DKanthio/Maquette" style={linkStyle}>Maquette sur GitHub</a></p> 
          <p><a href="https://github.com/DKanthio/commentaire" style={linkStyle}>Dynamiser un espace commentaire</a></p> 
        </div>
        
        <div className="col-md-3">
        <h4>Derniers articles</h4>
          {latestArticles.map((article, index) => (
          <p key={index}>
            <a href={`/blog#${article.anchor}`} style={linkStyle}>{article.title}</a>
          </p>
       ))}
</div>
      </div>
      
      <div className="copyright">
        <p>© {new Date().getFullYear()} John Doe. Tous droits réservés.</p>
        <a href="#top" style={linkStyle}>Remonter en haut de la page</a>
      </div>

      <div id="back-to-top" style={{ display: 'none', position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#298eff', borderRadius: '50%', padding: '10px' }}>
        <a href="#top" style={{ color: '#444' }}>↑</a>
      </div>
    </footer>
  );
};

export default Pied;
