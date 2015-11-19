var Post = React.createClass({
  render: function() {
    var post = this.props.post;

    return (
      <article className="post drop-down-container">
        <Author {...this.props}/>
        <p className="body">{post.body}</p>
        <DropDown>
          <button>Edit</button>
          <button>Delete</button>
        </DropDown>
      </article>
    );
  }
});
