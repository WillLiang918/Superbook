var Replies = React.createClass({
  render: function() {
    var {replies, currentUser, parent, users, post, showReplyForm, ...other} = this.props;
    var className = "reply-form" + (showReplyForm ? "" : " hidden");

    return (
      <div className="replies">
        <ReplyList {...this.props} />
        <CommentForm
          currentUser={currentUser}
          post={post}
          parent={parent}
          className={className}
        />
      </div>
    );
  }
});
