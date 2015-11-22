var SearchBar = React.createClass({
  getInitialState: function() {
    return {search: "", focus: false, hover: false};
  },
  render: function() {
    var active = this.state.focus || this.state.hover;

    return (
      <form
        className="header-search-bar flex-container"
        onSubmit={this.handleSubmit}
      >

        <input type="text"
               className="header-search"
               placeholder="Search Superbook"
               value={this.state.search}
               onChange={this.onChange}
               onFocus={this.onFocus}
               onBlur={this.onBlur}
        />

        <button className={"search-button " + (active ? "active" : "")}>
          <strong className="magnifying-glass" />
        </button>

        <SearchResults
          active={active}
          results={this.results()}
          handleClick={this.handleClick}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
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
    this.setState({search: ""});
  },
  handleClick: function(e) {
    var name = e.currentTarget.dataset.name;
    this.setState({search: name || "", hover: false, focus: false});
  },
  MAX_RESULTS: 8,
  results: function() {
    var results = [], users = this.props.users, MAX = this.MAX_RESULTS,
        searchRegex = new RegExp(this.state.search, "i");

    for (var id in users) {
      var user = users[id];
      var name = user.first_name + user.last_name;
      if (searchRegex.test(name)) {
        results.push(user);
      }
      if (results.length == MAX) {
        return results;
      }
    }

    return results;
  }
});
