var Contact = React.createClass({
  render: function() {
    var {profile, user, ...other} = this.props;

    return (
      <article className="user-contact">
        <h4>Contact Information</h4>

        <ul>
          <li>
            <div>Email</div>
            <div>{user.email}</div>
          </li>

          <li>
            <a className="field">
              <strong className="plus-icon" />
              <span>Add a mobile phone</span>
            </a>
          </li>

          <li>
            <a className="field">
              <strong className="plus-icon" />
              <span>Add your address</span>
            </a>
          </li>
        </ul>
      </article>
    );
  }
});
