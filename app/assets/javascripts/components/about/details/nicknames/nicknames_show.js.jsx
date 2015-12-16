var NicknamesShow = React.createClass({
  render: function() {
    var {nicknames, toggleEdit, user, currentUser} = this.props;
    if (!nicknames || nicknames.length === 0) { return <NicknamesAdd {...this.props} />; }

    var editClass = "edit-about";
    if (currentUser.id !== user.id) { editClass += " hidden"; }

    return (
      <div className="flex-container max-width about-detail-content">
        <ul className="nickname-list">
          {
            nicknames.map(function(nickname) {
              return <li key={nickname.id} className="nickname black">{nickname.name}</li>;
            })
          }
        </ul>
        <a className={editClass} data-name="nicknames" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
