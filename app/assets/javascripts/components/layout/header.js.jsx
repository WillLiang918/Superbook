var Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <nav className="header-nav">
          <Logo />
          <SearchBar users={this.props.users} />
          <HeaderLinks {...this.props} />
        </nav>
      </header>
    );
  }
});
