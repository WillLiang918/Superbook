var Header = React.createClass({
  render: function() {
    var {users, searchResults, ...other} = this.props;
    return (
      <header className="header">
        <nav className="header-nav">
          <Logo />
          <SearchBar users={users} searchResults={searchResults} />
          <HeaderLinks {...this.props} />
        </nav>
      </header>
    );
  }
});
