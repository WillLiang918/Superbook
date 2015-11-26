var About = React.createClass({
  getInitialState: function() {
    return {activeIdx: 0};
  },
  render: function() {
    var activeIdx = this.state.activeIdx;
    var {user, profile, ...other} = this.props;

    return (
      <section className="about-page">
        <header className="about-header">
          <h3>About</h3>
        </header>

        <div className="flex-container">
          <AboutSideNav activeIdx={activeIdx} setActiveIdx={this.setActiveIdx} />

          <AboutContent activeIdx={activeIdx}>
            <BasicInfo user={user} profile={profile} />
            <Contact   user={user} profile={profile} />
            <Details   user={user} profile={profile} />
          </AboutContent>
        </div>
      </section>
    );
  },
  setActiveIdx: function(idx) {
    this.setState({activeIdx: idx});
  }
});
