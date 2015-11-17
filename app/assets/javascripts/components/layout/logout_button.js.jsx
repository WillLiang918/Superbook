var LogoutButton = React.createClass({
  render: function() {
    return (
      <form method="POST" action="/logout" className="logout-form">
        <input type="hidden" name="authenticity_token" value={Assets.authToken} />
        <input type="hidden" name="_method" value="DELETE" />
        <button type="submit"className="logout-button">
          <div className="center">Log Out</div>
        </button>
      </form>
    );
  }
});
