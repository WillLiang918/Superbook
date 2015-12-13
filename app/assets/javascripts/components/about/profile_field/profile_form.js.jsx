var ProfileForm = React.createClass({
  getInitialState: function() {
    var {name, profile, ...other} = this.props;
    var state = {};
    state[name] = (profile[name] || "");
    return state;
  },
  render: function() {
    var {name, inputType, placeholder, ...other} = this.props;

    return (
      <div className="flex-container max-width">
        <div className="capitalize">{name}</div>

        <form className="about-field-form" data-name={name} onSubmit={this.save}>
          <input
            type={inputType || "text"}
            name={name}
            onChange={this.onChange}
            value={this.state[name]}
            placeholder={placeholder || ("Enter " + name + "...")}
          />
        </form>

        <div>
          <button className="blue save fb-btn" onClick={this.save} data-name={name}>Save</button>
          <button className="gray cancel fb-btn" onClick={this.props.toggleEdit} data-name={name}>Cancel</button>
        </div>
      </div>
    );
  },
  onChange: function(e) {
    var target = e.target;
    this.state[target.name] = target.value;
    this.forceUpdate();
  },
  save: function(e) {
    e.preventDefault();
    ApiUtil.updateProfile(this.props.user.id, this.state);
    this.props.toggleEdit(e);
  }
});
