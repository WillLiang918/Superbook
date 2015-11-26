var ProfilePicture = React.createClass({
  render: function() {
    var {status, url, ...other} = this.props, upload;
    if (status === FriendConstants.SELF) {
      upload = <ImageUpload title="Update Profile Picture" save={ApiUtil.uploadAvatar} />;
    }

    return (
      <div className="profile-picture">
        <img src={url} />
        {upload}
      </div>
    );
  }
});
