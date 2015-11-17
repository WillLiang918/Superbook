$(function() {
  var root = document.getElementById("content");
  var routes = (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );

  ReactDOM.render(routes, root);
});
