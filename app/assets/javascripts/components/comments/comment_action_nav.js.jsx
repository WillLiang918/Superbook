var CommentActionNav = React.createClass({
  render: function() {
    var {commentLikes, onReply, currentUser, ...other} = this.props;
    var liked = commentLikes && commentLikes.indexOf(currentUser.id) >= 0;
    var onLike = (liked ? this.unlike : this.like);

    var likeCount;
    if (commentLikes && commentLikes.length > 0) {
      likeCount = (
        <a className="comment-like-count">
          <span className="comment-like-icon" />
          {commentLikes.length}
        </a>
      );
    }

    return (
      <div className={"comment-nav" + (liked ? " liked" : "")}>
        <a onClick={onLike}>{liked ? "Unlike" : "Like"}</a>
        <a onClick={onReply}>Reply</a>
        {likeCount}
      </div>
    );
  },
  like: function() {
    var comment = this.props.comment;
    var data = {likeable_id: comment.id, likeable_type: "Comment"};
    ApiUtil.like(data);
  },
  unlike: function() {
    var comment = this.props.comment;
    var data = {likeable_id: comment.id, likeable_type: "Comment"};
    ApiUtil.unlike(data);
  }
});
