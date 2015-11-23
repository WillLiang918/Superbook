var Comment = React.createClass({
  componentDidMount: function() {
    this.$modal = $("#comment-modal");
  },
  render: function() {
    var {comment, users, ...other} = this.props;
    var user = users[comment.author_id];
    var avatarUrl = user.avatar.profile;
    var userUrl = "/users/" + user.id;
    var userName = user.first_name + " " + user.last_name;

    return (
      <article className="comment flex-container">
        <Thumbnail user={user} />
        <p className="comment-body">
          <Link to={userUrl} className="author-name">{userName}</Link>
          {comment.body}
        </p>
        <button
          className="edit-comment hover-bubble-above"
          data-hover="Remove"
          onClick={this.activateModal}
        />
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
