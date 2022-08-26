import "../css/Post.css"
function Post({body, userName}) {
  console.log("Post props: " + JSON.stringify(body));
  return (
    <div  className="Post">
        {body.map(post => {
            return (
              <div className="Body" key={post.id}>
                <img
                  className="postImg"
                  src="https://www.gravatar.com/avatar/19f41f7f9559c25f79a72b6fb34f78e6"
                  alt="profileImage"
                />
                <span className="userName">{userName}</span>
                <span className="handle">@{userName}</span>
                <br />
                <span className="content">
                {post.body}
                </span>
              </div>
            );
        })}
    </div>
  );
}

export default Post;
