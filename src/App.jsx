import React from 'react';
import Navbar from './components/Navbar';
import ImagePost from './components/ImagePost';
import './App.css';
import PostDetails from './components/PostDetails';

const App = () => {
  const posts = [
    {
      id: 1, imageUrl: "https://picsum.photos/2000/2000?grayscale", name: "arcastic_us",
      postcomment: [
        {
          author: "donalleniii",
          isVerified: true,
          timeAgo: "8h",
          content: "OMG 😱 celebrating 🥳 over 4000 followers today! Thank you! Enjoy this augmented reality real time puppet I made. You can try it now went below in the thread.",
          likes: "32K"
        },
        {
          author: "nasdaily",
          isVerified: true,
          timeAgo: "1d",
          content: 'This place is called "Sealand" it is 4 KM off the coast of the UK. It was a military structure that was later abandoned.\n\nSo someone named Roy Bates decided to take it over and turn it into his own country in International Waters.',
          likes: "3K"
        },
        {
          author: "nasdaily",
          isVerified: true,
          timeAgo: "1d",
          content: 'This place is called "Sealand" it is 4 KM off the coast of the UK. It was a military structure that was later abandoned.\n\nSo someone named Roy Bates decided to take it over and turn it into his own country in International Waters.',
          likes: "3K"
        },
        {
          author: "nasdaily",
          isVerified: true,
          timeAgo: "1d",
          content: 'This place is called "Sealand" it is 4 KM off the coast of the UK. It was a military structure that was later abandoned.\n\nSo someone named Roy Bates decided to take it over and turn it into his own country in International Waters.',
          likes: "3K"
        },
      ]
    },
    {
      id: 2, imageUrl: "https://picsum.photos/1900/1900?grayscale", name: "arcastic_us2",
      postcomment: [
        {
          author: "donalleniii",
          isVerified: true,
          timeAgo: "8h",
          content: "OMG 😱 celebrating 🥳 over 4000 followers today! Thank you! Enjoy this augmented reality real time puppet I made. You can try it now went below in the thread.",
          likes: "32K"
        },
        {
          author: "nasdaily",
          isVerified: true,
          timeAgo: "1d",
          content: 'This place is called "Sealand" it is 4 KM off the coast of the UK. It was a military structure that was later abandoned.\n\nSo someone named Roy Bates decided to take it over and turn it into his own country in International Waters.',
          likes: "3K"
        },
        {
          author: "nasdaily",
          isVerified: true,
          timeAgo: "1d",
          content: 'This place is called "Sealand" it is 4 KM off the coast of the UK. It was a military structure that was later abandoned.\n\nSo someone named Roy Bates decided to take it over and turn it into his own country in International Waters.',
          likes: "3K"
        },
        {
          author: "nasdaily",
          isVerified: true,
          timeAgo: "1d",
          content: 'This place is called "Sealand" it is 4 KM off the coast of the UK. It was a military structure that was later abandoned.\n\nSo someone named Roy Bates decided to take it over and turn it into his own country in International Waters.',
          likes: "3K"
        },
      ]
    }
  ];

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="posts-container">
          {posts.map(post => (
            <>
              <ImagePost key={post.id} imageUrl={post.imageUrl} name={post.name} posts={post.postcomment} />
            </>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;