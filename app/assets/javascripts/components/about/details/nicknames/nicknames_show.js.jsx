var NicknamesShow = React.createClass({
  render: function() {
    var {nicknames, toggleEdit, ...other} = this.props;

    if (!nicknames || nicknames.length === 0) { return <NicknamesAdd {...this.props} />; }

    return (
      <div className="flex-container max-width">
        <p className="nicknames">{nicknames}</p>
        <a className="edit-about" data-name="nicknames" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
