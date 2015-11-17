$(function() {
  var root = document.getElementById("content");
  var routes = (
    <Router>
      <Route path="/" component={App}>
        <Route path="users/:id" component={UserPage} />
      </Route>
    </Router>
  );

  ReactDOM.render(routes, root);
});
