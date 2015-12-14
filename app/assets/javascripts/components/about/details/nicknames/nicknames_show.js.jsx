var NicknamesShow = React.createClass({
  render: function() {
    var {nicknames, toggleEdit, ...other} = this.props;

    if (!nicknames || nicknames.length === 0) { return <NicknamesAdd {...this.props} />; }

    return (
      <div className="flex-container max-width about-detail-content">
        <ul className="nickname-list">
          {
            nicknames.map(function(nickname) {
              return <li key={nickname.id} className="nickname black">{nickname.name}</li>;
            })
          }
        </ul>
        <a className="edit-about" data-name="nicknames" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
