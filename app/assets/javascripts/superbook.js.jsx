$(function() {
  var root = document.getElementById("content");
  if (!root) return;

  var routes = (
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={NewsFeed} />
        <Route path="search/:search" component={Search} />
        <Route path="users/:id" component={UserPage}>
          <IndexRoute component={Timeline} />
          <Route path="friends" component={FriendsIndex} />
        </Route>
      </Route>
    </Router>
  );

  ReactDOM.render(routes, root);
});
