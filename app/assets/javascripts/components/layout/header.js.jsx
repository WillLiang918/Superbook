var Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <nav className="header-nav">
          <Logo />
          <SearchBar />
          <HeaderLinks />
        </nav>
      </header>
    );
  }
});
