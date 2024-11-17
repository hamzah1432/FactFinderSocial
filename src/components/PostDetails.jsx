import React, { useState, useEffect } from "react";
import HeartIcon from "../assets/Icon/HeartIcon";

// PostDetails includes the post image and its associated comments.

const PostDetails = ({ imageUrl, name, posts }) => {
  const handleButtonClick = (e) => {
    // Prevent the click event from bubbling up to the card
    e.stopPropagation();
  };

  return (
    <div>
      <div className="PostContainer">
        <div
          className="post"
          onClick={(e) => {
            handleButtonClick(e);
          }}
        >
          <div className="image">
            <img
              src={imageUrl}
              alt=""
              width={536}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div
          style={{ padding: "0px 30px" }}
          onClick={(e) => {
            handleButtonClick(e);
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginTop: 10,
            }}
          >
            <div
              style={{ width: 36, height: 36, minHeight: 36 }}
              className="user-avatar"
            ></div>
            <div>{name}</div>
          </div>
          <PostComment posts={posts} name={name} />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

const PostComment = ({ posts, name }) => {
  const [comment, setComment] = useState("");
  const [postcomment, setPostcomment] = useState(posts);

  const handleAddComment = () => {
    if (!comment.trim()) return;

    const NewComment = {
      author: name,
      isVerified: true,
      timeAgo: "1m",
      content: comment,
      likes: 0,
      likeIt: false,
    };

    setPostcomment([...postcomment, NewComment]);
    setComment("");
  };

  return (
    <div className="smp-container">
      <div className="smp-posts-section">
        <div style={{ overflowY: "scroll", height: 427, scrollbarWidth: "none" }}>
          {postcomment.map((post, index) => (
            <div key={index + "ee"} className="smp-post">
              <div className="smp-avatar" />
              <div className="smp-content-container">
                <div className="smp-header-row">
                  <span className="smp-author-name">{post.author}</span>
                  {post.isVerified && (
                    <svg
                      className="smp-verified-badge"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" fill="#1d9bf0" />
                      <path
                        d="M9 16.17L4.83 12l-1.42 1.41L9 19l12-12-1.41-1.41L9 16.17z"
                        fill="#fff"
                      />
                    </svg>
                  )}
                  <span className="smp-time-ago">· {post.timeAgo}</span>
                  <button className="smp-more-button">...</button>
                </div>
                <p className="smp-post-content">{post.content}</p>
                <div className="post-actions">
                  <HeartIcon liked={post.likeIt} />
                  <span className="smp-likes-count">{post.likes} likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="smp-comment-section">
          <div className="smp-avatar" />
          <input
            type="text"
            placeholder="Add a comment..."
            className="smp-comment-input"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="smp-post-button" onClick={handleAddComment}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

