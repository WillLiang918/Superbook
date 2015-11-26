var ProfilePicture = React.createClass({
  render: function() {
    return (
      <div className="profile-picture">
        <img src={this.props.url} />
        <ImageUpload title="Update Profile Picture" />
      </div>
    );
  }
});
