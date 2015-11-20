var UserSideNavHeader = React.createClass({
  render: function() {
    return (
      <header className="users-side-nav-header flex-container-start">
        <h3>{this.props.title}</h3>
        <small>{this.props.small}</small>
      </header>
    );
  }
});
