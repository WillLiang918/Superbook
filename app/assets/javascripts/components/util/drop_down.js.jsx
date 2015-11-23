var DropDown = React.createClass({
  getInitialState: function() {
    return {active: false};
  },
  render: function() {
    var {className, ...other} = this.props;

    return (
      <div className={"drop-down " + (className || "")} {...other}>
        <a href="#" onClick={this.onClick} ref="link"></a>

        <ul className={this.state.active ? "" : "hidden"}>
          {
            React.Children.map(this.props.children, function(child, idx) {
              return (
                <li key={idx} onClick={child.props._onClick || this._blank}>
                  <div className="center-vertical-ib">{child}</div>
                </li>
              );
            }, this)
          }
        </ul>
      </div>
    );
  },
  onClick: function(e) {
    e.preventDefault();

    $(document).one("click", function(e) {
      if (e.target !== this.refs.link) {
        this.setState({active: false});
      }
    }.bind(this));

    this.toggleState();
  },
  toggleState: function() {
    this.setState({active: !this.state.active});
  },
  _blank: function() {}
});
