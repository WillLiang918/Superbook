var PhoneAdd = React.createClass({
  render: function() {
    return (
      <a className="field no-pad" data-name="phone" onClick={this.props.toggleEdit}>
        <strong data-name="phone" className="plus-icon" />
        <span data-name="phone">Add your phone</span>
      </a>
    );
  }
});
