var FriendRequestStatus = React.createClass({
  render: function() {
    return (
      <section className="friend-request-status">
        <header className="upcase">
          <h3 className="center-vertical">
            Do you know <span>{this.props.user.first_name}</span>?
          </h3>
        </header>

        <section className="friend-request-status-body flex-container">
          <p>Request Sent.</p>
          <FriendRequestButton />
        </section>
      </section>
    );
  }
});
