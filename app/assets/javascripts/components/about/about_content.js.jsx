var AboutContent = React.createClass({
  render: function() {
    var activeIdx = this.props.activeIdx;

    return (
      <ul className="about-content">
        {React.Children.map(this.props.children, function(child, idx) {
          return (
            <li key={idx} className={idx === activeIdx ? "" : "hidden"}>
              {child}
            </li>
          );
        })}
      </ul>
    );
  }
});
