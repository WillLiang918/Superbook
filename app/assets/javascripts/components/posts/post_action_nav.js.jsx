var PostActionNav = React.createClass({
  render: function() {
    var liked = this.props.liked;
    var className = "post-like-action" + (liked ? " liked" : "");
    var onClick = (liked ? this.unlike : this.like);

    return (
      <div className="post-action-nav">
        <a className={className} onClick={onClick}>Like</a>
        <a className="post-comment-action">Comment</a>
      </div>
    );
  },
  like: function() {
    var post = this.props.post;
    var data = {likeable_id: post.id, likeable_type: "Post"};
    ApiUtil.like(data);
  },
  unlike: function() {
    var post = this.props.post;
    var data = {likeable_id: post.id, likeable_type: "Post"};
    ApiUtil.unlike(data);
  }
});
