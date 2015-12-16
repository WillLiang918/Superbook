var AbilitiesShow = React.createClass({
  render: function() {
    var {abilities, toggleEdit, user, currentUser} = this.props;
    if (!abilities || !abilities.length) { return <AbilitiesAdd {...this.props} />; }

    var editClass = "edit-about";
    if (currentUser.id !== user.id) { editClass += " hidden"; }

    return (
      <div className="flex-container max-width about-detail-content">
        <ul className="ability-list">
          {
            abilities.map(function(ability) {
              return <li key={ability.id} className="ability black">{ability.name}</li>;
            })
          }
        </ul>
        <a className={editClass} data-name="abilities" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
