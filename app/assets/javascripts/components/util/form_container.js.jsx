var FormContainer = React.createClass({
  getInitialState: function() {
    return {editing: new Set()};
  },
  toggleEdit: function(e) {
    var name = e.target.dataset.name, editing = this.state.editing;
    if (editing.has(name)) {
      editing.delete(name);
    } else {
      editing.add(name);
    }
    this.forceUpdate();
  },
  render: function() {
    var {className, title, ...other} = this.props;

    return (
      <article className={className}>
        <h4>{title}</h4>

        <ul>
          {
            React.Children.map(this.props.children, function(child) {
              return (
                <li>
                  {
                    React.cloneElement(
                      child,
                      Object.assign(
                        {},
                        child.props,
                        {toggleEdit: this.toggleEdit},
                        this.state
                      )
                    )
                  }
                </li>
              );
            }, this)
          }
        </ul>
      </article>
    );
  }
});
