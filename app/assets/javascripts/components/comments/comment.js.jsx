var Comment = React.createClass({
  getInitialState: function() {
    return {editOpened: false, editing: false, showReplyForm: false};
  },
  componentDidMount: function() {
    this.$modal = $("#comment-modal");
  },
  openEdit: function() {
    if (!this.state.editOpened) {
      this.setState({editOpened: true});
    }
  },
  render: function() {
    var {comment, commentsByParent, users, currentUser, post, isReply, likes, ...other} = this.props;
    var user = users[comment.author_id];

    var changeCommentButton;
    if (currentUser.id === comment.author_id) {
      changeCommentButton = (
        <DropDown
          className={"edit-comment " + (this.state.editOpened ? "" : "hover-bubble-above")}
          data-hover="Edit or Delete"
          onClick={this.openEdit}
        >
          <button _onClick={this.editComment}>Edit...</button>
          <button _onClick={this.activateModal}>Delete...</button>
        </DropDown>
      );
    } else if (currentUser.id === post.author_id || currentUser.id === post.receiver_id) {
      changeCommentButton = (
        <button
          className="delete-comment hover-bubble-above"
          data-hover="Remove"
          onClick={this.activateModal}
        />
      );
    }

    var childComments = commentsByParent[comment.id];
    var replies = (
      <Replies
        replies={childComments}
        parent={comment}
        users={users}
        currentUser={currentUser}
        post={post}
        showReplyForm={this.state.showReplyForm}
        isReply={isReply}
        likes={likes}
      />
    );

    var commentLikes = likes.comment[comment.id], mainComment;
    if (this.state.editing) {
      mainComment = (
        <EditCommentForm
          comment={comment}
          currentUser={currentUser}
          finishEditing={this.finishEditing}
        />
      );
    } else {
      mainComment = (
        <article className="comment flex-container">
          <Thumbnail user={user} />
          <CommentBody
            user={user}
            comment={comment}
            showReplyForm={this.showReplyForm}
            isReply={isReply}
            commentLikes={commentLikes}
            currentUser={currentUser}
          />
          {changeCommentButton}
        </article>
      );
    }

    return (
      <div className="comment-container">
        {mainComment}
        {replies}
      </div>
    )
  },
  activateModal: function() {
    this.$modal.addClass("is-active").off("click");
    this.$modal.on("click", ".cancel", this.deactivateModal);
    this.$modal.on("click", ".delete", this.deleteComment);
  },
  deactivateModal: function() {
    this.$modal.removeClass("is-active");
  },
  deleteComment: function(e) {
    var comment = this.props.comment;
    ApiUtil.deleteComment(comment.id);
    this.deactivateModal();
  },
  editComment: function() {
    this.setState({editing: true});
    this.props.startEdit();
  },
  finishEditing: function() {
    this.setState({editing: false});
    this.props.finishEdit();
  },
  showReplyForm: function() {
    if (!this.props.isReply) {
      this.setState({showReplyForm: true});
      setTimeout(this.focusForm, 0);
    }
  },
  focusForm: function() {
    var $this = $(ReactDOM.findDOMNode(this));
    var $form = $this.find(".reply-form");
    var $input = $form.find("input").eq(0).focus();
  }
});
