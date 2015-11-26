var CoverPhoto = React.createClass({
  render: function() {
    return (
      <figure className="cover-photo">
        <img className="cover-image" src={this.props.cover} />
        <ImageUpload title="Update Cover Photo" className="cover-upload" save={ApiUtil.uploadCover} />
      </figure>
    );
  }
});
