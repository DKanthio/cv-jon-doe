import React from 'react';
import '../App.css'; 

const Blog = () => {
  const articles = [
    {
      title: "L'importance des technologies front-end modernes",
      content: "Cet article explore l'impact des frameworks front-end tels que React, Angular et Vue.js sur le développement web moderne.",
      date:"11/06/2023",
      anchor: "article-1" 
    },
    {
      title: "Les meilleures pratiques en matière de sécurité pour les applications web",
      content: "Découvrez les pratiques recommandées pour renforcer la sécurité des applications web et protéger les données des utilisateurs.",
      date:"11/07/2023",
      anchor: "article-2"
    },
    {
      title: "Comment améliorer la performance d'un site web",
      content: "Des conseils pratiques pour optimiser les performances d'un site web, y compris la vitesse de chargement et l'expérience utilisateur.",
      date:"11/08/2023",
      anchor: "article-3"
    },
    {
      title: "Les dernières tendances en design web",
      content: "Explorez les tendances émergentes en matière de design web et découvrez comment elles façonnent l'avenir de la conception web.",
      date:"11/09/2023",
      anchor: "article-4"
    },
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
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#1e1e1e' }}>
      <h1>Blog de John Doe</h1>
      {articles.map((article, index) => (
  <div key={index} id={article.anchor} style={{ 
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  }}>
    <h2 style={{ fontSize: '1.5rem', color:'#1e1e1e' ,fontWeight: 'bold' }}>{article.title}</h2>
    <p style={{ fontSize: '1rem', color:'#444' }}>{article.content}</p>
    <p style={{ color: '#444', fontSize: '0.9rem', color:'#444' }}>Date de publication : {article.date}</p>
  </div>
))}
    </div>
  );
};

export default Blog;
