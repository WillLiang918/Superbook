var Post = React.createClass({
  getInitialState: function() {
    return {editable: false};
  },
  render: function() {
    var post = this.props.post;
    var body;
    if (this.state.editable) {
      body = <EditPostForm post={post} cancel={this.cancelEdit} update={this.updatePost} />;
    } else {
      body = <p className="body">{post.body}</p>;
    }

    return (
      <article className="post drop-down-container">
        <Author {...this.props}/>
        {body}
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
  },
  updatePost: function(body) {
    console.log(body);
    this.cancelEdit();
  }
});
