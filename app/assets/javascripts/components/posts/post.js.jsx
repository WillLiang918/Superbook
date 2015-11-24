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
    var {currentUser, users, post, comments, ...other} = this.props;
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

    var commentsByParent = comments;
    var topLevelComments = comments[null] || [];
    return (
      <div>
        <article className="post drop-down-container">
          <Author {...this.props}/>
          {content}
          {dropdown}
          <PostActionNav />
        </article>

        <Comments
          comments={topLevelComments}
          commentsByParent={commentsByParent}
          post={post}
          currentUser={currentUser}
          users={users}
        />
      </div>
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
