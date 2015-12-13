var PhoneForm = React.createClass({
  getInitialState: function() {
    return {phone: this.props.profile.phone || ""};
  },
  render: function() {
    return (
      <div className="flex-container max-width">
        <div>Phone</div>

        <form className="about-field-form" data-name="phone" onSubmit={this.save}>
          <input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.state.phone}
            placeholder="(XXX)-XXX-XXXX"
          />
        </form>

        <div>
          <button className="blue save fb-btn" onClick={this.save} data-name="phone">Save</button>
          <button className="gray cancel fb-btn" onClick={this.props.toggleEdit} data-name="phone">Cancel</button>
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
