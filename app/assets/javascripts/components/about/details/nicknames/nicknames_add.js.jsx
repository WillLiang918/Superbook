var NicknamesAdd = React.createClass({
  render: function() {
    return (
      <a className="field about-detail-content" data-name="nicknames" onClick={this.props.toggleEdit}>
        <strong data-name="nicknames" className="plus-icon" />
        <span data-name="nicknames">Do you have any aliases or alter egos?</span>
      </a>
    );
  }
});
