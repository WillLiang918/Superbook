var AboutField = React.createClass({
  render: function() {
    var {editing, name, form, show, user, currentUser, ...other} = this.props;
    var Component = (currentUser.id === user.id && editing.has(name) ? form : show);
    return <Component {...this.props} />;
  }
});
