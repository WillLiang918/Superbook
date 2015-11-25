var CommentBody = React.createClass({
  render: function() {
    var {currentUser, user, comment, isReply, showReplyForm, commentLikes, ...other} = this.props;
    var userUrl = "/users/" + user.id;
    var userName = user.first_name + " " + user.last_name;
    var focusReplyForm = this.focusReplyForm;
    var onClick = function() {
      showReplyForm();
      var $input = (isReply ? this.getInput() : this.getNestedInput());
      $input.focus().blink();
    }.bind(this);

    return (
      <div className="comment-body">
        <Link to={userUrl} className="author-name">{userName}</Link>
        {comment.body}
        <CommentActionNav
          onReply={onClick}
          commentLikes={commentLikes}
          currentUser={currentUser}
          comment={comment}
        />
      </div>
    );
  },
  getInput: function() {
    var $this = $(ReactDOM.findDOMNode(this));
    var $replies = $this.closest(".replies");
    var $form = $replies.find(".reply-form");
    return $form.find("input").eq(0);
  },
  getNestedInput: function() {
    var $this = $(ReactDOM.findDOMNode(this));
    var $replies = $this.closest(".comment-container").find(".replies");
    var $form = $replies.find(".reply-form");
    return $form.find("input").eq(0);
  }
});
