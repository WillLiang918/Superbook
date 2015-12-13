var BioAdd = React.createClass({
  render: function() {
    return (
      <a className="field" data-name="bio" onClick={this.props.toggleEdit}>
        <strong data-name="bio" className="plus-icon" />
        <span data-name="bio">Write some details about yourself</span>
      </a>
    );
  }
});
