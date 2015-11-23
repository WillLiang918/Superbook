var Comment = React.createClass({
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
      </article>
    );
  }
});
