var AbilitiesForm = React.createClass({
  getInitialState: function() {
    var abilities = this.props.abilities;
    if (!abilities) return {abilities: [], ability: ""};
    return {abilities: abilities.map(ability => ability.name), ability: ""};
  },
  render: function() {
    var tokenList, abilities = this.state.abilities;
    if (abilities.length > 0) {
      tokenList = (
        <ul className="nickname-tokens">
          {
            abilities.map(function(ability, idx) {
              return (
                <li key={idx}>
                  <Token content={ability} handleDelete={this.handleDelete.bind(this, idx)} />
                </li>
              );
            }, this)
          }
        </ul>
      );
    }

    return (
      <form
        className="about-field-form about-detail-content flex-container max-width"
        data-name="abilities"
        onSubmit={this.handleSubmit}
      >
        <div>
          {tokenList}
          <input
            className="ability-input"
            name="ability"
            type="text"
            onChange={this.onChange}
            value={this.state.ability}
            placeholder="Enter ability..."
            onKeyPress={this.onKeyPress}
          />
        </div>

        <div>
          <button className="blue save fb-btn" onClick={this.save} data-name="abilities">Save</button>
          <button className="gray cancel fb-btn" onClick={this.props.toggleEdit} data-name="abilities">Cancel</button>
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
    ApiUtil.updateAbilities(this.props.user.id, this.state.abilities);
    this.props.toggleEdit(e);
  },
  handleDelete: function(idx) {
    var abilities = this.state.abilities;
    if (idx >= 0) {
      abilities.splice(idx, 1);
      this.forceUpdate();
    }
  },
  onKeyPress: function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      var name = this.state.ability;
      if (!name) return;
      this.state.abilities.push(name);
      this.setState({ability: ""});
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
  }
});
