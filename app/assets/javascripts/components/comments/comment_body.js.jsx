var CommentBody = React.createClass({
  render: function() {
    var {user, comment, ...other} = this.props;
    var userUrl = "/users/" + user.id;
    var userName = user.first_name + " " + user.last_name;

    return (
      <p className="comment-body">
        <Link to={userUrl} className="author-name">{userName}</Link>
        {comment.body}
      </p>
    );
  }
});
