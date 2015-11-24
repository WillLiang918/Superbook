var Replies = React.createClass({
  render: function() {
    var {replies, currentUser, parent, users, post, showReplyForm, isReply, ...other} = this.props;
    var className = "reply-form" + (showReplyForm ? "" : " hidden");
    var commentForm;
    if (!isReply) {
      commentForm = (
        <CommentForm
          currentUser={currentUser}
          post={post}
          parent={parent}
          className={className}
        />
      );
    }

    return (
      <div className="replies">
        <ReplyList {...this.props} />
        {commentForm}
      </div>
    );
  }
});
