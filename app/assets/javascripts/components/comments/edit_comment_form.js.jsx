var EditCommentForm = React.createClass({
  getInitialState: function() {
    return {body: this.props.comment.body};
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    var user = this.props.currentUser;

    return (
      <form className="edit-comment-form">
        <Thumbnail user={user} />
        <textarea value={this.state.body} onKeyPress={this.onKeyPress} onChange={this.onChange} />
      </form>
    );
  },
  onChange: function(e) {
    this.setState({body: e.target.value});
  },
  onKeyPress: function(e) {
    if (e.which === 13) {
      this.updateComment({body: e.target.value});
    }
  },
  updateComment: function(comment) {
    var updatedComment = Object.assign({}, this.props.comment, comment);
    this.props.finishEditing();
  }
});
