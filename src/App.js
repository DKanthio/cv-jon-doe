import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Entete from './components/Entete';
import Pied from './components/Pied';
import Accueil from './pages/Accueil';
import Service from './pages/Service';
import Legale from './pages/Legale'; 
import Realisations from './pages/Realisations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const App = () => {
  
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

  
  const latestArticles = articles.slice(Math.max(articles.length - 2, 0));

  return (
    <Router>
      <div>
        <Entete />
        <div className="main-content">
          <Routes>
          <Route path="/" element={<Accueil />} />
            <Route path="/service" element={<Service />} />
            <Route path="/legale" element={<Legale/>} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Pied latestArticles={latestArticles} /> 
      </div>
    </Router>
  );
};

export default App;
