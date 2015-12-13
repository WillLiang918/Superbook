var ProfileField = React.createClass({
  render: function() {
    return React.createElement(AboutField, Object.assign({}, {
      show: ProfileShow,
      form: ProfileForm
    }, this.props));
  }
});
