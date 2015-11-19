var AnswerFriendRequest = React.createClass({
  render: function() {
    return (
      <p className="answer-friend-request">
        <strong>Username</strong> sent you a friend request
        <button className="blue hover-bubble" data-hover-text="Confirm Request">Confirm Request</button>
        <button className="gray hover-bubble" data-hover-text="Delete Request">Delete Request</button>
      </p>
    );
  }
});
