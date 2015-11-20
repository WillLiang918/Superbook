var ProfilePicture = React.createClass({
  render: function() {
    return (
      <img src={this.props.url} className="profile-picture" />
    );
  }
});
