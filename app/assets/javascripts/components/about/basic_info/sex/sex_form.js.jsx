var SexForm = React.createClass({
  getInitialState: function() {
    return {sex: this.props.user.sex};
  },
  render: function() {
    return (
      <div className="flex-container max-width">
        <div>Sex</div>

        <form className="about-field-form">
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="sex"
            value="male"
            id="male"
            checked={this.state.sex === "male"}
            onChange={this.onChange}
          />

          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="sex"
            value="female"
            id="female"
            checked={this.state.sex === "female"}
            onChange={this.onChange}
          />
        </form>

        <div>
          <button className="blue save fb-btn" onClick={this.save} data-name="sex">Save</button>
          <button className="gray cancel fb-btn" onClick={this.props.toggleEdit} data-name="sex">Cancel</button>
        </div>
      </div>
    );
  },
  onChange: function(e) {
    var target = e.target;
    var name = target.name, value = target.value;
    this.state[name] = value;
    this.forceUpdate();
  },
  save: function(e) {
    ApiUtil.updateUser(this.props.user.id, this.state);
    this.props.toggleEdit(e);
  }
});
