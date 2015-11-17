var SearchBar = React.createClass({
  getInitialState: function() {
    return {search: ""};
  },
  render: function() {
    return (
      <form className="header-search-bar flex-container" onSubmit={this.handleSubmit}>
        <input type="text"
               className="header-search"
               placeholder="Search Superbook"
               value={this.state.search}
               onChange={this.onChange}
        />
        <button className="search-button">
          <strong className="magnifying-glass" />
        </button>
      </form>
    );
  },
  onChange: function(e) {
    this.setState({search: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({search: ""});
  }
});
