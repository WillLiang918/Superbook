var CoverPhoto = React.createClass({
  render: function() {
    var {status, cover, ...other} = this.props, upload;
    if (status === FriendConstants.SELF) {
      upload = <ImageUpload title="Update Cover Photo" className="cover-upload" save={ApiUtil.uploadCover} />;
    }

    return (
      <figure className="cover-photo">
        <img className="cover-image" src={this.props.cover} />
        {upload}
      </figure>
    );
  }
});
