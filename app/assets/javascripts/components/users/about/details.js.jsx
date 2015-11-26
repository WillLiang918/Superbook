var Details = React.createClass({
  render: function() {
    return (
      <article className="user-details">
        <ul>
          <li>
            <h4>About You</h4>
            <div className="flex-container">
              <a className="field">
                <strong className="plus-icon" />
                <span>Write some details about yourself</span>
              </a>
            </div>
          </li>

          <li>
            <h4>Other Names</h4>
            <div className="flex-container">
              <a className="field">
                <strong className="plus-icon" />
                <span>Do you have any aliases or alter egos?</span>
              </a>
            </div>
          </li>

          <li>
            <h4>Abilities</h4>
            <div className="flex-container">
              <a className="field">
                <strong className="plus-icon" />
                <span>What special powers and/or abilities do you possess?</span>
              </a>
            </div>
          </li>
        </ul>
      </article>
    );
  }
});
