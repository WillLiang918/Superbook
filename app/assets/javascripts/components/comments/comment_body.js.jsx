var CommentBody = React.createClass({
  render: function() {
    var {user, comment, isReply, showReplyForm, ...other} = this.props;
    var userUrl = "/users/" + user.id;
    var userName = user.first_name + " " + user.last_name;
    var onClick = (isReply ? this.focusReplyForm : showReplyForm);

    return (
      <div className="comment-body">
        <Link to={userUrl} className="author-name">{userName}</Link>
        {comment.body}
        <div className="comment-nav">
          <a>Like</a>
          <a onClick={onClick}>Reply</a>
        </div>
      </div>
    );
  },
  focusReplyForm: function() {
    var $this = $(ReactDOM.findDOMNode(this));
    var $replies = $this.closest(".replies");
    var $form = $replies.find(".reply-form").removeClass("hidden");
    $form.find("input").eq(0).focus();
  }
});
