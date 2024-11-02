import React from 'react';
import Navbar from './components/Navbar';
import ImagePost from './components/ImagePost';
import './App.css';

const App = () => {
  const posts = [
    { id: 1, imageUrl: "https://picsum.photos/2000/2000?grayscale" },
    { id: 2, imageUrl: "https://picsum.photos/1900/1900?grayscale" }
  ];

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="posts-container">
          {posts.map(post => (
            <ImagePost key={post.id} imageUrl={post.imageUrl} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;