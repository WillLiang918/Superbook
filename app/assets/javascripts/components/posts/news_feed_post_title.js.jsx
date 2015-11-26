var NewsFeedPostTitle = React.createClass({
  render: function() {
    var {post, users, ...other} = this.props;
    var author = post.author;
    var receiver = users[post.receiver_id];

    var authorPath = "users/" + author.id, receiverPath = "users/" + receiver.id;
    var authorName = author.first_name + " " + author.last_name;
    var receiverName = receiver.first_name + " " + receiver.last_name;

    return (
      <div className="news-feed-post-title">
        <Link to={authorPath}>
          <h4 className="user-link">{authorName}</h4>
        </Link>

        <strong className="post-arrow" />

        <Link to={receiverPath} className="receiver-link">
          <h4 className="user-link">{receiverName}</h4>
        </Link>
      </div>
    );
  }
});
