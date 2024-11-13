import React from 'react';
import { useState } from 'react';
import HeartIcon from '../assets/Icon/HeartIcon';

const PostDetails = ({ imageUrl, name }) => {

  return (
    <div className="PostDetails">
      <div className="PostContainer">
        <div className="post">
          <div className="image">
            <img src={imageUrl} alt="" width={536} height={300} style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div style={{ padding: "0px 30px" }}>
          <div style={{display:"flex",alignItems:"center",gap:20,marginTop:10}}>
            <div style={{width:36,height:36,minHeight:36}} className="user-avatar"></div>
           <div>{name}</div>
          </div>
          <SocialMediaPost />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;




const SocialMediaPost = ({ imageUrl }) => {
  const posts = [
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
  ];

  const [isLiked, setIsLiked] = useState(false);

  return (
    <div style={styles.container}>
      {/* Posts Section */}
      <div style={styles.postsSection}>
        <div style={{ overflowY: "scroll", height: 427, scrollbarWidth: "none" }}>
          {posts.map((post, index) => (
            <div key={index} style={styles.post}>
              {/* Avatar */}
              <div style={styles.avatar} />

              {/* Content */}
              <div style={styles.contentContainer}>
                <div style={styles.headerRow}>
                  <span style={styles.authorName}>{post.author}</span>
                  {post.isVerified && (
                    <svg style={styles.verifiedBadge} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  )}
                  <span style={styles.timeAgo}>· {post.timeAgo}</span>
                  <button style={styles.moreButton}>...</button>
                </div>

                <p style={styles.postContent}>{post.content}</p>

                <div style={styles.interactionBar}>
                  <button
                    style={styles.likeButton}
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    <HeartIcon />
                  </button>
                  <span style={styles.likesCount}>{post.likes} likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Input */}
        <div style={styles.commentSection}>
          <div style={styles.avatar} />
          <input
            type="text"
            placeholder="Add a comment..."
            style={styles.commentInput}
          />
          <button style={styles.postButton}>Post</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    backgroundColor: '#000000',
    color: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    position: 'relative',
    height: "100%",
    // paddingRight:10
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  mainImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  postsSection: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  post: {
    display: 'flex',
    gap: '12px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#7c3aed',
    flexShrink: 0,
  },
  contentContainer: {
    flex: 1,
    minWidth: 0,
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  authorName: {
    fontWeight: 500,
  },
  verifiedBadge: {
    width: '16px',
    height: '16px',
    color: '#1d9bf0',
  },
  timeAgo: {
    color: '#71767b',
  },
  moreButton: {
    marginLeft: 'auto',
    color: '#71767b',
    fontSize: '24px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0 8px',
  },
  postContent: {
    marginTop: '4px',
    fontSize: '14px',
    lineHeight: '18px',
    whiteSpace: 'pre-wrap',
  },
  interactionBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '8px',
  },
  likeButton: {
    color: "white",
    background: 'none',
    border: 'none',
    padding: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likesCount: {
    fontSize: '14px',
    color: '#71767b',
  },
  commentSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '16px',
    position: "absolute",
    bottom: 50,
    width: "100%",
    padding: 16

  },
  commentInput: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: '#71767b',
    fontSize: '14px',
    padding: '8px',
    '&::placeholder': {
      color: '#71767b',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  postButton: {
    background: 'none',
    border: 'none',
    color: '#1d9bf0',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    padding: '8px',
  },
};

