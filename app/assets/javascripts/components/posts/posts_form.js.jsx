var PostForm = React.createClass({
  getInitialState: function() {
    return {body: ""};
  },
  render: function() {
    var {status, parent, user, ...other} = this.props;
    if (status != FriendConstants.SELF && status != FriendConstants.FRIENDS) {
      return false;
    }

    var placeholder = (status === FriendConstants.SELF ? "What's on your mind?" : "Write something...");
    var linkText = (parent === "news-feed" ? "Update Status" : "Status");
    var thumbnail = (parent === "news-feed" ? <Thumbnail user={user} /> : "");

    return (
      <form className={"post-form " + parent} onSubmit={this.handleSubmit}>
        <nav className="post-form-nav flex-container">
          <button>
            <strong className="post-icon" />
            <div className="label active">{linkText}</div>
          </button>
        </nav>
        <div className="flex-container status-container">
          {thumbnail}
          <textarea value={this.state.body} onChange={this.onChange} placeholder={placeholder} />
        </div>
        <nav className="post-form-sub-nav flex-container">
          <button type="submit">Post</button>
        </nav>
      </form>
    );
  },
  onChange: function(e) {
    this.setState({body: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var post = {receiver_id: this.props.user.id, body: this.state.body};
    ApiUtil.createPost(post);
    this.setState({body: ""});
  }
});
