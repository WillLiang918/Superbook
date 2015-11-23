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

        <div>
          <textarea
            value={this.state.body}
            onKeyPress={this.onKeyPress}
            onChange={this.onChange}
            ref={ function(body) {this.body = body;}.bind(this) }
          />

          <a href="javascript:void(0)" className="cancel-edit" onClick={this.cancel}>
            Cancel
          </a>
        </div>
      </form>
    );
  },
  onChange: function(e) {
    this.body.style.height = (this.body.scrollHeight - 14) + "px"; //NOTE: 14 is for padding
    this.setState({body: e.target.value});
  },
  onKeyPress: function(e) {
    if (e.which === 13) {
      this.updateComment({body: e.target.value});
    }
  },
  updateComment: function(comment) {
    var updatedComment = Object.assign({}, this.props.comment, comment);
    ApiUtil.updateComment(updatedComment);
    this.props.finishEditing();
  },
  cancel: function() {
    this.props.finishEditing();
  }
});
