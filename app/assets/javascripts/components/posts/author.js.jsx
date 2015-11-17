var Author = React.createClass({
  render: function() {
    return (
      <section className="author-details flex-container">
        <div className="thumbnail" />
        <div>
          <a href="#" className="user-link">Username</a>
          <a href="#" className="post-link">Time</a>
        </div>
      </section>
    );
  }
});
