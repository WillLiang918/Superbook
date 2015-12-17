var Messages = React.createClass({
  stores: [MessageStore],
  mixins: [ControllerView],
  getStateFromStores: function() {
    return {messages: MessageStore.all()};
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {
    ApiUtil.fetchMessages();
  },
  componentWillUnmount: function() {

  },
  render: function() {
    return null;
  }
});
