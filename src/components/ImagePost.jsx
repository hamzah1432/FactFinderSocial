import React, { useState, useEffect } from "react";
import HeartIcon from "../assets/Icon/HeartIcon";
import CommentIcon from "../assets/Icon/CommentIcon";
import ShareIcon from "../assets/Icon/ShareIcon";
import PostDetails from "./PostDetails";
import ShareResultsPage from "./SharePost";

// this component contain all post component like authur and profile picture and the post picture
// also ther is comment (PostDetails) and share (ShareResultsPage ) componet

const ImagePost = ({ imageUrl, name, likeIt, posts }) => {
  const [show, setShow] = useState(false);
  const [share, setShare] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <div className="ImagePost">
      <div className="user">
        <a href="https://picsum.photos/1900/1900?grayscale" target="_blank">
          <div className="user-avatar" />
        </a>

        <div className="vl"></div>
      </div>
      <div className="post">
        <div className="post-header">
          <div className="username">{name}</div>
        </div>

        <div className="image-container">
          <img src={imageUrl} alt="Post" />
        </div>

        <div className="post-actions">
          <HeartIcon liked={likeIt} />
          {/* this is icon for like */}
          <button
            onClick={() => {
              setShow(true);
            }}
          >
            <CommentIcon />
            {/* this is icon for comment  */}
          </button>
          <button
            onClick={() => {
              setShare(true);
            }}
          >
            <ShareIcon />
            {/* this is icon for share  */}
          </button>
        </div>
      </div>

      {show ? (
        <div
          className="PostDetails"
          onClick={() => {
            setShow(false);
          }}
        >
          <PostDetails imageUrl={imageUrl} name={name} posts={posts} />
        </div>
      ) : (
        <></>
      )}
      {share ? (
        <div
          className="ShareResultsPage"
          onClick={() => {
            setShare(false);
          }}
        >
          <ShareResultsPage />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImagePost;
