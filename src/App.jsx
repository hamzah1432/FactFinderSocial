import React from 'react';
import Navbar from './components/Navbar';
import ImagePost from './components/ImagePost';
import './App.css';
import PostDetails from './components/PostDetails';

const App = () => {
  const posts = [
    { id: 1, imageUrl: "https://picsum.photos/2000/2000?grayscale",name:"arcastic_us" },
    { id: 2, imageUrl: "https://picsum.photos/1900/1900?grayscale",name:"arcastic_us2" }
  ];

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="posts-container">
          {posts.map(post => (
            <ImagePost key={post.id} imageUrl={post.imageUrl} name={post.name} />
          ))}
        </div>
      </main>
     
    </div>
  );
};

export default App;