var CommentForm = React.createClass({
  getInitialState: function() {
    return {body: ""};
  },
  render: function() {
    var currentUser = this.props.currentUser;
    var avatarUrl = currentUser.avatar.profile;
    var className = "comment-form flex-container " + (this.props.className || "");

    return (
      <form className={className} onSubmit={this.handleSubmit}>
        <img src={avatarUrl} className="profile-thumb" />
        <input
          type="text"
          value={this.state.body}
          onChange={this.onChange}
          placeholder="Write a comment..."
        />
      </form>
    );
  },
  onChange: function(e) {
    this.setState({body: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var {post, parent, ...other} = this.props;
    var commentData = {
      commentable_type: "Post",
      commentable_id: post.id,
      body: this.state.body
    };
    if (parent && parent.id) {
      commentData.parent_id = parent.id;
    }
    ApiUtil.createComment(commentData);
    this.setState({body: ""});
  }
});
