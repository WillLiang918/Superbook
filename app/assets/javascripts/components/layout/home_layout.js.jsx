var HomeLayout = React.createClass({
  render: function() {
    return (
      <div className="main-container flex-container">
        <HomeSideNav {...this.props} />
        <section className="feed">
          {this.props.children}
        </section>
        <Ads {...this.props} />
      </div>
    );
  }
});
