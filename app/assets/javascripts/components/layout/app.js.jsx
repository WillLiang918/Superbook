var App = React.createClass({
  getStateFromStore: function() {
    return {currentUser: CurrentUserStore.get()};
  },
  getInitialState: function() {
    return this.getStateFromStore();
  },
  onChange: function() {
    this.setState(this.getStateFromStore());
  },
  componentDidMount: function() {
    CurrentUserStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function() {
    CurrentUserStore.removeChangeLister(this.onChange);
  },
  render: function() {
    var children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {...this.state});
    }, this);

    return (
      <div>
        <Header {...this.state} />
        {children}
      </div>
    );
  }
});
