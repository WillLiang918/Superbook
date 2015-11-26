var TimelinePostTitle = React.createClass({
  render: function() {
    var {authorPath, authorName, ...other} = this.props;
    return (
      <Link to={authorPath}>
        <h4 className="user-link">{authorName}</h4>
      </Link>
    );
  }
});
