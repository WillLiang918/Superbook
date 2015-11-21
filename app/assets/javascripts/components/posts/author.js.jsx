var Author = React.createClass({
  render: function() {
    var post = this.props.post;
    var author = post.author;
    var authorName = author.first_name + " " + author.last_name;
    var authorPath = "users/" + author.id;

    return (
      <section className="author-details flex-container">
        <Link to={authorPath}>
          <img src={author.avatar.profile} className="thumbnail" />
        </Link>

        <div>
          <Link to={authorPath}>
            <h4 className="user-link">{authorName}</h4>
          </Link>
          <span className="post-link">{post.updated_at}</span>
        </div>
      </section>
    );
  }
});
