var CommentsList = React.createClass({
  render: function() {
    var {comments, commentsByParent, users, currentUser, post, startEdit, finishEdit, likes, ...other} = this.props;
    if (comments.length === 0) return false;

    return (
      <ul className="comments-list">
        {
          comments.sort(function(commentA, commentB) {
            if (commentA.id < commentB.id) {
              return -1;
            } else if (commentA.id > commentB.id) {
              return 1;
            } else {
              return 0;
            }
          }).map(function(comment) {
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
