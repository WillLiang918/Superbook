var EditPostForm = React.createClass({
  getInitialState: function() {
    return {body: this.props.post.body};
  },
  render: function() {
    return (
      <form className="post-form edit-post" onSubmit={this.handleSubmit}>
        <textarea value={this.state.body} onChange={this.onChange} placeholder="Write something..." ref="body" />

        <nav className="post-form-sub-nav flex-container">
          <button className="cancel">Cancel</button>
          <button type="submit">Done Editing</button>
        </nav>
      </form>
    );
  },
  onChange: function(e) {
    var body = this.refs.body;
    body.style.height = body.scrollHeight + "px";
    this.setState({body: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
  }
});
