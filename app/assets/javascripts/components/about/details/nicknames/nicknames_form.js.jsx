var NicknamesForm = React.createClass({
  getInitialState: function() {
    var nicknames = this.props.nicknames;
    if (!nicknames) return {nicknames: [], nickname: ""};
    else return {nicknames: nicknames.map(nickname => nickname.name), nickname: ""};
  },
  render: function() {
    var tokenList, nicknames = this.state.nicknames;
    if (nicknames.length > 0) {
      tokenList = (
        <ul className="nickname-tokens">
          {
            nicknames.map(function(nickname, idx) {
              return (
                <li key={idx}>
                  <Token content={nickname} handleDelete={this.handleDelete.bind(this, idx)} />
                </li>
              );
            }, this)
          }
        </ul>
      );
    }

    return (
      <form className="about-field-form about-detail-content flex-container max-width" data-name="nicknames" onSubmit={this.handleSubmit}>
        <div>
          {tokenList}
          <input
            className="nickname-input"
            name="nickname"
            type="text"
            onChange={this.onChange}
            value={this.state.nickname}
            placeholder="Enter alias..."
            onKeyPress={this.onKeyPress}
          />
        </div>

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
    ApiUtil.updateNicknames(this.props.user.id, this.state.nicknames);
    this.props.toggleEdit(e);
  },
  handleDelete: function(idx) {
    var nicknames = this.state.nicknames;
    if (idx >= 0) {
      nicknames.splice(idx, 1);
      this.forceUpdate();
    }
  },
  onKeyPress: function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      var name = this.state.nickname;
      if (!name) return;
      this.state.nicknames.push(name);
      this.setState({nickname: ""});
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
  }
});
