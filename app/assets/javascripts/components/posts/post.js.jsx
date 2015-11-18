var Post = React.createClass({
  render: function() {
    var post = this.props.post;

    return (
      <article className="post">
        <Author post={post} />
        <p className="body">{post.body}</p>
      </article>
    );
  }
});
