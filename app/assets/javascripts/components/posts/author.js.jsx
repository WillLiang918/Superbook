var Author = React.createClass({
  render: function() {
    var post = this.props.post;
    var author = post.author;
    var authorName = author.first_name + " " + author.last_name;
    
    return (
      <section className="author-details flex-container">
        <div className="thumbnail" />
        <div>
          <a href="#" className="user-link">{authorName}</a>
          <a href="#" className="post-link">{post.updated_at}</a>
        </div>
      </section>
    );
  }
});
