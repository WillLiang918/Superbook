var HometownForm = React.createClass({
  getInitialState: function() {
    return {hometown: this.props.profile.hometown || ""};
  },
  render: function() {
    return (
      <div className="flex-container max-width">
        <div>Hometown</div>

        <form className="about-field-form" data-name="hometown" onSubmit={this.save}>
          <input
            type="text"
            name="hometown"
            onChange={this.onChange}
            value={this.state.hometown}
            placeholder="Enter hometown..."
          />
        </form>

        <div>
          <button className="blue save fb-btn" onClick={this.save} data-name="hometown">Save</button>
          <button className="gray cancel fb-btn" onClick={this.props.toggleEdit} data-name="hometown">Cancel</button>
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
    ApiUtil.updateProfile(this.props.user.id, this.state);
    this.props.toggleEdit(e);
  }
});
