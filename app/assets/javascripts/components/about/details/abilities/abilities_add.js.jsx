var AbilitiesAdd = React.createClass({
  render: function() {
    return (
      <a className="field about-detail-content" data-name="abilities" onClick={this.props.toggleEdit}>
        <strong data-name="abilities" className="plus-icon" />
        <span data-name="abilities">Do you have abilities or powers?</span>
      </a>
    );
  }
});
