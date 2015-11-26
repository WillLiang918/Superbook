var Header = React.createClass({
  render: function() {
    var {users, searchResults, searchResultsPreview, ...other} = this.props;
    return (
      <header className="header">
        <nav className="header-nav">
          <Logo />
          <SearchBar users={users} searchResultsPreview={searchResultsPreview} />
          <HeaderLinks {...this.props} />
        </nav>
      </header>
    );
  }
});
