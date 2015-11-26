var FriendRequestList = React.createClass({
  render: function() {
    var requesters = this.props.requesters;
    return (
      <ul>
        {
          requesters.map(function(requester) {
            return (
              <li key={requester.id}>
                <FriendRequestListItem requester={requester} />
              </li>
            );
          })
        }

        {requesters.length === 0 ? <NoRequestsListItem /> : ""}
      </ul>
    );
  }
});
