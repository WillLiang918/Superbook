var Comment = React.createClass({
  componentDidMount: function() {
    this.$modal = $("#comment-modal");
  },
  render: function() {
    var {comment, users, currentUser, post, ...other} = this.props;
    var user = users[comment.author_id];
    var avatarUrl = user.avatar.profile;
    var userUrl = "/users/" + user.id;
    var userName = user.first_name + " " + user.last_name;


    var changeCommentButton;
    if (currentUser.id === comment.author_id) {
      changeCommentButton = (
        <button
          className="edit-comment hover-bubble-above"
          data-hover="Edit or Delete"
        />
      )
    } else if (currentUser.id === post.author_id || currentUser.id === post.receiver_id) {
      changeCommentButton = (
        <button
          className="delete-comment hover-bubble-above"
          data-hover="Remove"
          onClick={this.activateModal}
        />
      );
    }

    return (
      <article className="comment flex-container">
        <Thumbnail user={user} />
        <p className="comment-body">
          <Link to={userUrl} className="author-name">{userName}</Link>
          {comment.body}
        </p>
        {changeCommentButton}
      </article>
    );
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
  }
});
