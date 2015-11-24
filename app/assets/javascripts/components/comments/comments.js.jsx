var Comments = React.createClass({
  getInitialState: function() {
    return {numEditing: 0};
  },
  startEdit: function() {
    this.setState({numEditing: this.state.numEditing + 1});
  },
  finishEdit: function() {
    this.setState({numEditing: this.state.numEditing - 1});
  },
  render: function() {
    var {currentUser, post, likes, ...other} = this.props;
    var postLikes = likes.post[post.id] || [];

    return (
      <section className="comment-box">
        <PostLikes likes={postLikes} />

        <CommentsList
          {...this.props}
          startEdit={this.startEdit}
          finishEdit={this.finishEdit}
          likes={likes}
        />
        <CommentForm
          currentUser={currentUser}
          post={post}
          className={this.state.numEditing === 0 ? "" : "hidden"}
        />
      </section>
    );
  }
});
