var Post = React.createClass({
  render: function() {
    return (
      <article className="post">
        <Author />
        <p className="body">{this.props.post.body}</p>
      </article>
    );
  }
});
