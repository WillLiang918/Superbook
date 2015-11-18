var PostForm = React.createClass({
  getInitialState: function() {
    return {body: ""};
  },
  render: function() {
    return (
      <form className="post-form" onSubmit={this.handleSubmit}>
        <nav className="post-form-nav flex-container">
          <button>
            <strong className="post-icon" />
            <div className="label active">Post</div>
          </button>
        </nav>
        <textarea value={this.state.body} onChange={this.onChange} placeholder="Write something..." />
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
