import React, { useState, useEffect } from 'react';
import '../App.css'; 

const GitHubProfile = () => {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then((response) => response.json())
      .then((data) => setGithubData(data))
      .catch((error) => console.error('Error fetching GitHub data:', error));
  }, []);

  if (!githubData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>GitHub Profile</h1>
      <img src={githubData.avatar_url} alt="GitHub Avatar" />
      <p>Name: {githubData.name}</p>
      <p>Followers: {githubData.followers}</p>
      <p>Public Repos: {githubData.public_repos}</p>
    </div>
  );
};

export default GitHubProfile;
