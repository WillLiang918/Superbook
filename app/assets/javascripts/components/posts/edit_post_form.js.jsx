var EditPostForm = React.createClass({
  getInitialState: function() {
    return {body: this.props.body};
  },
  render: function() {
    return (
      <form className="post-form edit-post" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.body}
          onChange={this.onChange}
          placeholder="Write something..."
          ref={ function(body) {this.body = body;}.bind(this) }
        />

        <nav className="post-form-sub-nav flex-container">
          <button className="cancel" onClick={this.props.cancel}>Cancel</button>
          <button type="submit" disabled={!this.state.body}>Done Editing</button>
        </nav>
      </form>
    );
  },
  onChange: function(e) {
    this.body.style.height = this.body.scrollHeight + "px";
    this.setState({body: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.update(this.state.body);
  }
});
