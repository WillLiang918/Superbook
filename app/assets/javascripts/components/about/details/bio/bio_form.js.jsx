var BioForm = React.createClass({
  getInitialState: function() {
    return {bio: this.props.profile.bio || ""};
  },
  render: function() {
    return (
      <form className="about-field-form about-detail-content flex-container max-width" data-name="bio" onSubmit={this.save}>
        <textarea className="bio" name="bio" onChange={this.onChange} value={this.state.bio} placeholder="Enter details..." />
        <div>
          <button className="blue save fb-btn" onClick={this.save} data-name="bio">Save</button>
          <button className="gray cancel fb-btn" onClick={this.props.toggleEdit} data-name="bio">Cancel</button>
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
    ApiUtil.updateProfile(this.props.user.id, this.state);
    this.props.toggleEdit(e);
  }
});
