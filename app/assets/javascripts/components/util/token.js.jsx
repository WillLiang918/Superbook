var Token = React.createClass({
  render: function() {
    var {name, handleClick, ...other} = this.props;

    return (
      <div className="token">
        <a onClick={handleClick} className="delete-token" />
        <span>{name}</span>
      </div>
    );
  }
});
