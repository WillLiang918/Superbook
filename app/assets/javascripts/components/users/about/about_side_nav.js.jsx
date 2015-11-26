var AboutSideNav = React.createClass({
  tabs: ["Basic Info", "Contact", "Details About You"],
  render: function() {
    var {activeIdx, setActiveIdx, ...other} = this.props;

    return (
      <ul className="about-side-nav">
        {this.tabs.map(function(tab, idx) {
          return (
            <li key={idx} onClick={setActiveIdx.bind(null, idx)} className={idx === activeIdx ? "active" : ""}>
              {tab}
            </li>
          );
        })}
      </ul>
    );
  }
});
