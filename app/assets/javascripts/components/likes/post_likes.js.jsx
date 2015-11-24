var PostLikes = React.createClass({
  render: function() {
    var likes = this.props.likes;
    if (likes.length === 0) {
      return false;
    }

    return (
      <p className="post-likes">
        {likes.length} Like(s)
      </p>
    );
  }
});
