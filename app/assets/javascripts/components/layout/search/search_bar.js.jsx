var SearchBar = React.createClass({
  getInitialState: function() {
    return {search: "", focus: false};
  },
  render: function() {
    return (
      <form className="header-search-bar flex-container" onSubmit={this.handleSubmit}>
        <input type="text"
               className="header-search"
               placeholder="Search Superbook"
               value={this.state.search}
               onChange={this.onChange}
               onFocus={this.onFocus}
               onBlur={this.onBlur}
        />
        <button className="search-button">
          <strong className="magnifying-glass" />
        </button>

        <SearchResults focus={this.state.focus} />
      </form>
    );
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
  }
});
