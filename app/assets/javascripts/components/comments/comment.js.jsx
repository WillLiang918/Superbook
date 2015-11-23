var Comment = React.createClass({
  render: function() {
    var {comment, users, ...other} = this.props;
    var user = users[comment.author_id];
    var avatarUrl = user.avatar.profile;

    return (
      <article className="comment flex-container">
        <Thumbnail user={user} />
        <p className="comment-body">{comment.body}</p>
      </article>
    );
  }
});
