var PostActionNav = React.createClass({
  render: function() {
    var liked = this.props.liked;
    var className = "post-like-action" + (liked ? " liked" : "");
    var onLike = (liked ? this.unlike : this.like);

    return (
      <div className="post-action-nav">
        <a className={className} onClick={onLike}>Like</a>
        <a className="post-comment-action" onClick={this.goToComment}>Comment</a>
      </div>
    );
  },
  like: function() {
    var post = this.props.post;
    var data = {likeable_id: post.id, likeable_type: "Post"};
    ApiUtil.like(data);
  },
  unlike: function() {
    var post = this.props.post;
    var data = {likeable_id: post.id, likeable_type: "Post"};
    ApiUtil.unlike(data);
  },
  goToComment: function() {
    var $this = $(ReactDOM.findDOMNode(this));
    var $li = $this.closest("li");
    var $form = $li.find(".comment-box > .comment-form");
    var $input = $form.find("input[type='text']");

    $input.focus().css({ backgroundColor: "#F9FDC8" });

    setTimeout(function() {
      $input.animate({ backgroundColor: "#fff" }, 200);
    }, 0);
  }
});
