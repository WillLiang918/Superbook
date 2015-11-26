var AboutContent = React.createClass({
  content: ["Overview", "Contact and Basic Info", "Details About You"],
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
