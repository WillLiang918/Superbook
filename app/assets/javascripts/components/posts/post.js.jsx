var Post = React.createClass({
  getInitialState: function() {
    return {editable: false};
  },
  render: function() {
    var post = this.props.post;

    return (
      <article className="post drop-down-container">
        <Author {...this.props}/>
        {this.state.editable ? <EditPostForm post={post} cancel={this.cancelEdit} /> : <p className="body">{post.body}</p>}
        <DropDown>
          <button _onClick={this.editPost}>Edit</button>
          <button>Delete</button>
        </DropDown>
      </article>
    );
  },
  editPost: function() {
    this.setState({editable: true});
  },
  cancelEdit: function() {
    this.setState({editable: false});
  }
});
