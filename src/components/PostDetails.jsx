const PostDetails = ({ imageUrl }) => {

  return (
    <div className="PostDetails">
      <div className="PostContainer">
        <div className="post">
          <div className="image">
            <img src={imageUrl} alt="" width={536} height={300} style={{objectFit:"cover"}} />
          </div>
        </div>
        <div>
          post

        </div>
      </div>
    </div>
  );
};

export default PostDetails;