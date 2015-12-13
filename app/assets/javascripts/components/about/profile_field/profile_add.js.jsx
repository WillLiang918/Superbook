var ProfileAdd = React.createClass({
  render: function() {
    var {name, toggleEdit, ...other} = this.props;

    return (
      <a className="field no-pad" data-name={name} onClick={toggleEdit}>
        <strong data-name={name} className="plus-icon" />
        <span data-name={name}>{"Add your " + name}</span>
      </a>
    );
  }
});
