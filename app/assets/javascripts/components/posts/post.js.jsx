var Post = React.createClass({
  render: function() {
    var post = this.props.post;

    return (
      <article className="post">
        <Author {...this.props}/>
        <p className="body">{post.body}</p>
      </article>
    );
  }
});
