var CoverPhoto = React.createClass({
  render: function() {
    return (
      <figure className="cover-photo">
        <img className="cover-image" src={this.props.cover} />
      </figure>
    );
  }
});
