var FormContainer = React.createClass({
  getInitialState: function() {
    return {editing: new Set()};
  },
  toggleEdit: function(e) {
    e.preventDefault();
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

    var heading;
    if (title) { header = <h4>{title}</h4>; }

    return (
      <article className={className}>
        {heading}

        <ul>
          {
            React.Children.map(this.props.children, function(child) {
              return (
                <li className="form-container-list-item">
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
