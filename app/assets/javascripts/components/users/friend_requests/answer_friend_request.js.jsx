var AnswerFriendRequest = React.createClass({
  render: function() {
    var user = this.props.user;

    return (
      <p className="answer-friend-request">
        <strong>{user.first_name + " " + user.last_name}</strong> sent you a friend request

        <button className="blue hover-bubble" data-hover="Confirm Request" onClick={this.props.accept}>
          Confirm Request
        </button>

        <button className="gray hover-bubble" data-hover="Delete Request" onClick={this.props.delete}>
          Delete Request
        </button>
      </p>
    );
  }
});
