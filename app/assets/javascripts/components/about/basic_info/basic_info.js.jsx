var SEXES = {"male": "Male", "female": "Female"};
var BasicInfo = React.createClass({
  getInitialState: function() {
    return {editing: new Set()};
  },
  render: function() {
    var {profile, user, currentUser, ...other} = this.props;

    return (
      <article className="user-basic-info">
        <h4>Basic Information</h4>

        <ul>
          <li>
            <Birthday toggleEdit={this.toggleEdit} {...this.state} {...this.props} />
          </li>

          <li>
            <Sex toggleEdit={this.toggleEdit} {...this.state} {...this.props} />
          </li>

          <li>
            <a className="field">
              <strong className="plus-icon" />
              <span>Add your workplace</span>
            </a>
          </li>

          <li>
            <a className="field">
              <strong className="plus-icon" />
              <span>Add your hometown</span>
            </a>
          </li>
        </ul>
      </article>
    );
  },
  toggleEdit: function(e) {
    var name = e.target.dataset.name, editing = this.state.editing;
    if (editing.has(name)) {
      editing.delete(name);
    } else {
      editing.add(name);
    }
    this.forceUpdate();
  }
});
