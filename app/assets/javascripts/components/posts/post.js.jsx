var Post = React.createClass({
  getInitialState: function() {
    return {editable: true};
  },
  render: function() {
    var post = this.props.post;

    return (
      <article className="post drop-down-container">
        <Author {...this.props}/>
        {this.state.editable ? <EditPostForm post={post} /> : <p className="body">{post.body}</p>}
        <DropDown>
          <button>Edit</button>
          <button>Delete</button>
        </DropDown>
      </article>
    );
  }
});
