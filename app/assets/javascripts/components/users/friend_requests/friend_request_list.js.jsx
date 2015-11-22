var FriendRequestList = React.createClass({
  render: function() {
    var requesters = this.props.requesters;
    if (requesters.length === 0) return false;

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
      </ul>
    );
  }
});
