
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des films :', error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des films :</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}