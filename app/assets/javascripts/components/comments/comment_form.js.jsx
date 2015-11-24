var CommentForm = React.createClass({
  getInitialState: function() {
    return {body: ""};
  },
  render: function() {
    var {currentUser, className, ...other} = this.props;
    var avatarUrl = currentUser.avatar.profile;
    var placeholder = (className === "reply-form" ? "Write a reply..." : "Write a comment...");
    var className = "comment-form flex-container " + (className || "");

    return (
      <form className={className} onSubmit={this.handleSubmit}>
        <img src={avatarUrl} className="profile-thumb" />
        <input type="text" value={this.state.body} onChange={this.onChange} placeholder={placeholder} autofocus />
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
