var ControllerView = {
  _onChange: function() {
    this.setState(this.getStateFromStores());
  },

  getInitialState: function() {
    return this.getStateFromStores();
  },

  componentDidMount: function() {
    this.stores.forEach(function(store) {
      store.addChangeListener(this._onChange);
    }, this);
  },

  componentWillUnmount: function() {
    this.stores.forEach(function(store) {
      store.removeChangeListener(this._onChange);
    }, this);
  }
};
