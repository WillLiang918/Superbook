var PostsIndex = React.createClass({
  render: function() {
    return (
      <section className="posts-index">
        <PostForm />
        <PostsList posts={[{id: 1, author_id: 1, receiver_id: 1, body: "Hello World!"}]} />
      </section>
    );
  }
});
