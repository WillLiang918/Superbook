var Author = React.createClass({
  render: function() {
    var post = this.props.post;
    var author = post.author;
    var authorName = author.first_name + " " + author.last_name;

    return (
      <section className="author-details flex-container">
        <div className="thumbnail" />
        <div>
          <Link to={"users/" + author.id} className="user-link">{authorName}</Link>
          <a href="javascript:void(0)" className="post-link">{post.updated_at}</a>
        </div>
      </section>
    );
  }
});
