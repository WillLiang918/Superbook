var NicknamesForm = React.createClass({
  getInitialState: function() {
    return {nicknames: this.props.nicknames.slice() || [], nickname: ""};
  },
  render: function() {
    var tokenList, nicknames = this.state.nicknames;
    if (nicknames.length > 0) {
      tokenList = (
        <ul className="nickname-tokens">
          {
            nicknames.map(function(nickname) {
              return (
                <li key={nickname.id}>
                  <Token content={nickname.name} handleDelete={this.handleDelete.bind(this, nickname.id)} />
                </li>
              );
            }, this)
          }
        </ul>
      );
    }

    return (
      <form className="about-field-form" data-name="nicknames" onSubmit={this.save}>
        {tokenList}
        <input name="nickname" onChange={this.onChange} value={this.state.nickname} placeholder="Enter aliases..." />
        <div>
          <button className="blue save fb-btn" onClick={this.save} data-name="nicknames">Save</button>
          <button className="gray cancel fb-btn" onClick={this.props.toggleEdit} data-name="nicknames">Cancel</button>
        </div>
      </form>
    );
  },
  onChange: function(e) {
    var target = e.target;
    this.state[target.name] = target.value;
    this.forceUpdate();
  },
  save: function(e) {
    e.preventDefault();
    ApiUtil.updateUser(this.props.user.id, this.state);
    this.props.toggleEdit(e);
  },
  handleDelete: function(nicknameId) {
    var nicknames = this.state.nicknames;
    var idx = nicknames.findIndex(function(nickname) {
      return nickname.id === nicknameId;
    });
    if (idx >= 0) {
      nicknames.splice(idx, 1);
      this.forceUpdate();
    }
  }
});
