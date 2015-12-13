var EmailForm = React.createClass({
  getInitialState: function() {
    return {email: this.props.user.email};
  },
  render: function() {
    return (
      <div className="flex-container max-width">
        <div>Email</div>

        <form className="about-field-form">
          <input type="email" name="email" value={this.state.email} onChange={this.onChange} />
        </form>

        <div>
          <button className="blue save fb-btn" onClick={this.save} data-name="email">Save</button>
          <button className="gray cancel fb-btn" onClick={this.props.toggleEdit} data-name="email">Cancel</button>
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
