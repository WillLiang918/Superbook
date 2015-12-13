var NicknamesForm = React.createClass({
  getInitialState: function() {
    return {nicknames: this.props.nicknames || []};
  },
  render: function() {
    return (
      <form className="about-field-form" data-name="nicknames" onSubmit={this.save}>
        <textarea name="nicknames" onChange={this.onChange} value={this.state.nicknames} placeholder="Enter aliases..." />
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
  }
});
