import React from "react";
import HeartIcon from "../assets/Icon/HeartIcon";
import CommentIcon from "../assets/Icon/CommentIcon";
import ShareIcon from "../assets/Icon/ShareIcon";

const ImagePost = ({ imageUrl }) => {
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
    </div>
  );
};

export default ImagePost;

/*
import React from "react";
import HeartIcon from "../assets/Icon/HeartIcon";
import CommentIcon from "../assets/Icon/CommentIcon";
import ShareIcon from "../assets/Icon/ShareIcon";

const ImagePost = ({ imageUrl }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="user-avatar"></div>
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
  );
};

export default ImagePost;
*/
