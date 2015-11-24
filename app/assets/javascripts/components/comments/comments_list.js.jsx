var CommentsList = React.createClass({
  render: function() {
    var {comments, commentsByParent, users, currentUser, post, startEdit, finishEdit, likes, ...other} = this.props;
    if (comments.length === 0) return false;

    return (
      <ul className="comments-list">
        {
          comments.map(function(comment) {
            return (
              <li key={comment.id}>
                <Comment
                  comment={comment}
                  commentsByParent={commentsByParent}
                  users={users}
                  currentUser={currentUser}
                  post={post}
                  startEdit={startEdit}
                  finishEdit={finishEdit}
                  likes={likes}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }
});
