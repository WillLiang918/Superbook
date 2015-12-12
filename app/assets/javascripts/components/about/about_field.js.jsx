var AboutField = React.createClass({
  render: function() {
    var {editing, name, form, show, ...other} = this.props;
    var Component = (editing.has(name) ? form : show);
    return <Component {...other} />;
  }
});
