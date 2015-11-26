var SEXES = {"male": "Male", "female": "Female"};
var BasicInfo = React.createClass({
  render: function() {
    var {profile, user, ...other} = this.props;

    return (
      <article className="user-basic-info">
        <h4>Basic Information</h4>

        <ul>
          <li>
            <div>Birth Date</div>
            <div>{moment(user.birthday).format("MMM Do YYYY")}</div>
          </li>

          <li>
            <div>Sex</div>
            <div>{SEXES[user.sex]}</div>
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
  }
});
