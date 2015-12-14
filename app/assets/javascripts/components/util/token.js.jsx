var Token = React.createClass({
  render: function() {
    var {content, handleDelete, ...other} = this.props;

    return (
      <div className="token">
        <a onClick={handleDelete} className="delete-token" />
        <div className="token-content">{content}</div>
      </div>
    );
  }
});
