$(function() {
  var root = document.getElementById("content");
  if (!root) return;
  
  var routes = (
    <Router>
      <Route path="/" component={App}>
        <Route path="users/:id" component={UserPage} />
      </Route>
    </Router>
  );

  ReactDOM.render(routes, root);
});
