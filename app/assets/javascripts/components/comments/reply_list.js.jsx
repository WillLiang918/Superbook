var ReplyList = React.createClass({
  render: function() {
  var replies = this.props.replies;
  if (!replies || replies.length === 0) {
    return false;
  }

  return (
    <ul>
      {
        replies.map(function(reply) {
          return (
            <li key={reply.id} className="reply">
              <Comment comment={reply} {...this.props} commentsByParent={{}} />
            </li>
          );
        }, this)
      }
    </ul>
  );
  }
});
