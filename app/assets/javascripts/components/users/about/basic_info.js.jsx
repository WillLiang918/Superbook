var BasicInfo = React.createClass({
  render: function() {
    return (
      <article className="user-basic-info">
        <h4>Basic Information</h4>

        <ul>
          <li>
            <div>Birth Date</div>
            <div>Jan 1 1999</div>
          </li>

          <li>
            <div>Sex</div>
            <div>Male</div>
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
