import React, { useState, useEffect } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const githubUsername = "Kruti-Amrutiya";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?per_page=100`
        );
        if (!response.ok) {
          throw new Error("GitHub API error");
        }
        const data = await response.json();
        const publicRepos = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .map((repo) => ({
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description,
            language: repo.language,
          }));
        setRepos(publicRepos);
      } catch (err) {
        console.error("Failed to fetch repos:", err);
      }
    };

    fetchRepos();
  }, [githubUsername]);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <p className="section-subtitle">
        A collection of my public GitHub repositories showcasing my work and
        learning journey.
      </p>
      <div className="projects">
        {repos.length > 0 ? (
          repos.map((repo, i) => (
            <div className="project-card" key={i}>
              <h3>{repo.name}</h3>
              <p>
                <b>Language:</b> {repo.language || "—"}
              </p>
              <p>{repo.description || "No description available."}</p>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                View on GitHub →
              </a>
            </div>
          ))
        ) : (
          <p>Loading projects or no repositories found...</p>
        )}
      </div>
    </section>
  );
}
