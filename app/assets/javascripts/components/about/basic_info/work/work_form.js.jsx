var WorkForm = React.createClass({
  getInitialState: function() {
    return {work: this.props.profile.work || ""};
  },
  render: function() {
    return (
      <div className="flex-container max-width">
        <div>Work</div>

        <form className="about-field-form">
          <input
            type="text"
            name="work"
            onChange={this.onChange}
            value={this.state.work}
            placeholder="Enter Work..."
          />
        </form>

        <div>
          <button className="blue save fb-btn" onClick={this.save} data-name="work">Save</button>
          <button className="gray cancel fb-btn" onClick={this.props.toggleEdit} data-name="work">Cancel</button>
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
    // TODO Save
    this.props.toggleEdit(e);
  }
});
