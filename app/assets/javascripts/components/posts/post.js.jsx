var Post = React.createClass({
  getInitialState: function() {
    return {editable: false};
  },
  render: function() {
    var post = this.props.post;
    var content;
    if (this.state.editable) {
      content = <EditPostForm body={post.body} cancel={this.cancelEdit} update={this.updatePost} />;
    } else {
      content = <p className="body">{post.body}</p>;
    }

    var dropdown;
    var {currentUser, post, ...other} = this.props;
    if (currentUser.id === post.author_id) {
      dropdown = (
        <DropDown>
          <button _onClick={this.editPost}>Edit</button>
          <button _onClick={this.deletePost}>Delete</button>
        </DropDown>
      );
    } else if (currentUser.id === post.receiver_id) {
      dropdown = (
        <DropDown>
          <button _onClick={this.deletePost}>Delete</button>
        </DropDown>
      );
    }

    return (
      <article className="post drop-down-container">
        <Author {...this.props}/>
        {content}
        {dropdown}
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
    var post = this.props.post;
    var updatedPost = Object.assign({}, post, {body: body});
    ApiUtil.updatePost(updatedPost);
    this.cancelEdit();
  },
  deletePost: function() {
    ApiUtil.deletePost(this.props.post);
  }
});
