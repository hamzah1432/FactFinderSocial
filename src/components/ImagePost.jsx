import React, { useState } from "react";
import HeartIcon from "../assets/Icon/HeartIcon";
import CommentIcon from "../assets/Icon/CommentIcon";
import ShareIcon from "../assets/Icon/ShareIcon";
import PostDetails from "./PostDetails";

const ImagePost = ({ imageUrl }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="ImagePost">
      <div className="user">
        <div className="user-avatar"></div>
        <div className="vl"></div>
      </div>
      <div className="post">
        <div className="post-header">
          <div className="username">user_123</div>
        </div>

        <div className="image-container">
          <img src={imageUrl} alt="Post" />
        </div>

        <div className="post-actions">
          <button>
            <HeartIcon />
          </button>
          <button>
            <CommentIcon />
          </button>
          <button>
            <ShareIcon />
          </button>
        </div>
      </div>
      {/*  */}
      {show && <PostDetails />}
    </div>
  );
};

export default ImagePost;
