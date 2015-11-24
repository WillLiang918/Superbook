var Post = React.createClass({
  getInitialState: function() {
    return {editable: false};
  },
  render: function() {
    var {currentUser, users, post, comments, likes, ...other} = this.props;
    var content, dropdown;

    if (this.state.editable) {
      content = <EditPostForm body={post.body} cancel={this.cancelEdit} update={this.updatePost} />;
    } else {
      content = <p className="body">{post.body}</p>;
    }

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
    var postLikes = likes.post[post.id];
    var liked = postLikes && postLikes.indexOf(currentUser.id) >= 0;

    return (
      <div>
        <article className="post drop-down-container">
          <Author {...this.props}/>
          {content}
          {dropdown}
          <PostActionNav liked={liked} post={post} />
        </article>

        <Comments
          comments={topLevelComments}
          commentsByParent={commentsByParent}
          post={post}
          currentUser={currentUser}
          users={users}
          likes={likes}
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
