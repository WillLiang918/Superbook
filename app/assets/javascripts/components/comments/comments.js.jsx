var Comments = React.createClass({
  render: function() {
    var {currentUser, post, ...other} = this.props;

    return (
      <section className="comment-box">
        <CommentsList {...this.props} />
        <CommentForm currentUser={currentUser} post={post} />
      </section>
    );
  }
});
