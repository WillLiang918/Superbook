var HometownAdd = React.createClass({
  render: function() {
    return (
      <a className="field no-pad" data-name="hometown" onClick={this.props.toggleEdit}>
        <strong data-name="hometown" className="plus-icon" />
        <span data-name="hometown">Add your hometown</span>
      </a>
    );
  }
});
