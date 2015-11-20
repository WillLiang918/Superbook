// NOTE: must be contained in .hover-drop-down-container selector

var HoverDropDown = React.createClass({
  render: function() {
    return (
      <div className="hover-drop-down">
        <ul>
          {
            React.Children.map(this.props.children, function(child, idx) {
              return (
                <li key={idx} onClick={child.props._onClick || this._blank}>
                  <div className="center-vertical-ib">
                    {child}
                  </div>
                </li>
              );
            }, this)
          }
        </ul>
      </div>
    );
  },
  _blank: function() {}
});
