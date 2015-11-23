var CommentForm = React.createClass({
  getInitialState: function() {
    return {body: ""};
  },
  render: function() {
    var currentUser = this.props.currentUser;
    var avatarUrl = currentUser.avatar.profile;

    return (
      <form className="comment-form flex-container" onSubmit={this.handleSubmit}>
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
    var post = this.props.post;
    var commentData = {
      commentable_type: "Post",
      commentable_id: post.id,
      body: this.state.body
    };
    ApiUtil.createComment(commentData);
    this.setState({body: ""});
  }
});
