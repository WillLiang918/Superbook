var Replies = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    var {replies, currentUser, parent, users, post, ...other} = this.props;

    return (
      <div className="replies">
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

        <CommentForm currentUser={currentUser} post={post} parent={parent} className="reply-form" />
      </div>
    );
  }
});
