var Author = React.createClass({
  render: function() {
    var {post, users, parent, ...other} = this.props, title;

    var author = post.author;
    var authorName = author.first_name + " " + author.last_name;
    var authorPath = "users/" + author.id;

    if (parent === "news-feed" && post.author_id !== post.receiver_id) {
      title = <NewsFeedPostTitle {...this.props} />
    } else {
      title = <TimelinePostTitle authorPath={authorPath} authorName={authorName} />
    }

    return (
      <section className="author-details flex-container">
        <Link to={authorPath}>
          <img src={author.avatar.profile} className="thumbnail" />
        </Link>

        <div>
          {title}
          <span className="post-link">{post.updated_at}</span>
        </div>
      </section>
    );
  }
});
