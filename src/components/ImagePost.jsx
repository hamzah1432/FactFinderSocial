import React, { useState, useEffect } from "react";
import HeartIcon from "../assets/Icon/HeartIcon";
import CommentIcon from "../assets/Icon/CommentIcon";
import ShareIcon from "../assets/Icon/ShareIcon";
import PostDetails from "./PostDetails";

const ImagePost = ({ imageUrl, name, posts }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
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

        <div className="image-container" >
          <img src={imageUrl} alt="Post" />
        </div>

        <div className="post-actions">
          <HeartIcon />

          <button onClick={() => { setShow(true) }}>
            <CommentIcon />
          </button>
          <button>
            <ShareIcon />
          </button>
        </div>
      </div>

      {show ? <div className="PostDetails" onClick={() => { setShow(false) }}>
        <PostDetails imageUrl={imageUrl} name={name} posts={posts} />
      </div> :
        <></>
      }
    </div>
  );
};

export default ImagePost;
