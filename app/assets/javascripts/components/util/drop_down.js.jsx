var DropDown = React.createClass({
  getInitialState: function() {
    return {active: false};
  },
  render: function() {
    return (
      <div className="drop-down">
        <a href="#" onClick={this.onClick} ref="link"></a>

        <ul className={this.state.active ? "" : "hidden"}>
          {
            this.props.children.map(function(child, idx) {
              return <li key={idx}><div className="center-vertical-ib">{child}</div></li>;
            })
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
  }
});
