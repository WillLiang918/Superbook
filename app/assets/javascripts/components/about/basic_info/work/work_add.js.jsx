var WorkAdd = React.createClass({
  render: function() {
    return (
      <a className="field no-pad" data-name="work" onClick={this.props.toggleEdit}>
        <strong data-name="work" className="plus-icon" />
        <span data-name="work">Add your work</span>
      </a>
    );
  }
});
