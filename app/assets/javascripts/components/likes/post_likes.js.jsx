var PostLikes = React.createClass({
  render: function() {
    return (
      <p className="post-likes">
        {this.props.likes.length} Like(s)
      </p>
    );
  }
});
