var SearchBar = React.createClass({
  mixins:[History, Polling],
  componentWillMount: function() {
    this.lastSearch = "";
  },
  getInitialState: function() {
    return {search: "", focus: false, hover: false};
  },
  render: function() {
    var {search, focus, hover} = this.state;
    var active = focus || hover;

    return (
      <form
        className="header-search-bar flex-container"
        onSubmit={this.handleSubmit}
      >

        <input type="text"
               className="header-search"
               placeholder="Search By Name, Ability, or Alias..."
               value={this.state.search}
               onChange={this.onChange}
               onFocus={this.onFocus}
               onBlur={this.onBlur}
        />

        <button className={"search-button " + (active ? "active" : "")} type="submit">
          <strong className="magnifying-glass" />
        </button>

        <SearchResults
          active={active}
          results={this.results()}
          handleClick={this.handleClick}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          search={search}
          handleSubmit={this.handleSubmit}
        />
      </form>
    );
  },
  onMouseEnter: function() {
    this.setState({hover: true});
  },
  onMouseLeave: function() {
    this.setState({hover: false});
  },
  onFocus: function(e) {
    this.setState({focus: true});
  },
  onBlur: function(e) {
    this.setState({focus: false});
  },
  onChange: function(e) {
    this.setState({search: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.history.pushState(null, "search/" + this.state.search);
    this.setState({hover: false, focus: false});
  },
  handleClick: function(e) {
    var name = e.currentTarget.dataset.name;
    this.setState({search: name || "", hover: false, focus: false});
  },
  MAX_RESULTS: 8,
  results: function() {
    var {users, searchResultsPreview} = this.props;
    var results = [], MAX = this.MAX_RESULTS, seenIds = new Set(),
        searchRegex = new RegExp(this.state.search, "i"), user, name,
        search = this.state.search;

    if (search.length === 0) { return []; }

    for (var i = 0, n = searchResultsPreview.length; i < n; i++) {
      user = searchResultsPreview[i];
      if (!seenIds.has(user.id)) {
        results.push(user);
        seenIds.add(user.id);
      }
      if (results.length === MAX) { return results; }
    }

    for (var id in users) {
      user = users[id];
      name = user.first_name + " " + user.last_name;
      if (!seenIds.has(user.id) && searchRegex.test(name)) {
        results.push(user);
        seenIds.add(user.id);
      }
      if (results.length == MAX)  { return results; }
    }

    if (results.length < MAX) {
      this.fetchPreview(search);
    }

    return results;
  },
  throttledFetch: $.throttle(10, ApiUtil.fetchUserSearchPreview),
  fetchPreview: function(search) {
    if (search === this.lastSearch) { return; }
    this.throttledFetch(search);
    this.lastSearch = search;
  },
  fetchNewerData: function() {
    var {hover, focus, search} = this.state;
    if (focus || hover)
    ApiUtil.fetchUserSearchPreview(search);
  },
  pollingInterval: 200
});
