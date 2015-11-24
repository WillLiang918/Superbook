var CommentActionNav = React.createClass({
  render: function() {
    var {commentLikes, onReply, currentUser, ...other} = this.props;
    var liked = commentLikes && commentLikes.indexOf(currentUser.id) >= 0;
    var onLike = (liked ? this.unlike : this.like);

    return (
      <div className="comment-nav">
        <a onClick={onLike}>Like</a>
        <a onClick={onReply}>Reply</a>
        <span>{commentLikes && commentLikes.length || 0} Like(s)</span>
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
