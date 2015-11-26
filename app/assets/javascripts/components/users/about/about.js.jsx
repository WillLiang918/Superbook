var About = React.createClass({
  getInitialState: function() {
    return {activeIdx: 0};
  },
  render: function() {
    var activeIdx = this.state.activeIdx;
    return (
      <section className="about-page">
        <header className="about-header">
          <h3>About</h3>
        </header>

        <div className="flex-container">
          <AboutSideNav activeIdx={activeIdx} setActiveIdx={this.setActiveIdx} />
          
          <AboutContent activeIdx={activeIdx}>
            <BasicInfo />
            <Contact />
            <Details />
          </AboutContent>
        </div>
      </section>
    );
  },
  setActiveIdx: function(idx) {
    this.setState({activeIdx: idx});
  }
});
