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
    var replies = this.props.replies;

    return (
      <ul className="replies">
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
