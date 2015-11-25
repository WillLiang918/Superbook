var HomeLayout = React.createClass({
  render: function() {
    return (
      <div className="main-container flex-container">
        <nav className="side-nav"></nav>
        <section className="feed">
          {this.props.children}
        </section>
        <aside className="aside"></aside>
      </div>
    );
  }
});
