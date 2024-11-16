import React, { useState, useEffect } from "react";
import HeartIcon from "../assets/Icon/HeartIcon";
import CommentIcon from "../assets/Icon/CommentIcon";
import ShareIcon from "../assets/Icon/ShareIcon";
import PostDetails from "./PostDetails";
import ShareResultsPage from "./SharePost";

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
        <div className="user-avatar"></div>
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

          <button
            onClick={() => {
              setShow(true);
            }}
          >
            <CommentIcon />
          </button>
          <button
            onClick={() => {
              setShare(true);
            }}
          >
            <ShareIcon />
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
