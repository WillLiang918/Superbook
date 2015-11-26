var HeaderIconLinks = React.createClass({
  getInitialState: function() {
    return {activeIdx: -1};
  },
  handleDOMClick: function(e) {
    var $target = $(event.target);
    var isInsideContainer = $target.is("#header-icon-links *, #header-icon-links");
    if (!isInsideContainer) {
      this.setState({activeIdx: -1});
    }
  },
  componentDidMount: function() {
    $(document).on("click", this.handleDOMClick);
  },
  componentWillUnmount: function() {
    if (typeof this.clickHandler === "function") {
      document.off("click", this.handleDOMClick);
    }
  },
  changeActiveIdx: function(e) {
    var idx = parseInt(e.currentTarget.dataset.idx);
    if (idx === this.state.activeIdx) { idx = -1; }
    this.setState({activeIdx: idx});
  },
  render: function() {
    var tabIcons = [<button className="friend-requests-icon" />];
    var tabContent = [
      (
        <div>
          <header className="content-tab-header">
            <h3>Friend Requests</h3>
          </header>

          <FriendRequestList requesters={this.props.requesters} />
        </div>
      )
    ];
    var activeIdx = this.state.activeIdx;

    return (
      <div className="header-icon-links" id="header-icon-links">
        <ul className="icon-link-list flex-container-start">
          {tabIcons.map(function(icon, idx) {
            var className = (activeIdx === idx ? "active" : "");

            return (
              <li className={className} key={idx} data-idx={idx} onClick={this.changeActiveIdx}>
                {icon}
              </li>
            );
          }, this)}
        </ul>

        <section className={"header-icon-content" + (activeIdx < 0 ? " hidden" : "")}>
          {tabContent.map(function(content, idx) {
            return (
              <article className={"content-tab " + (activeIdx === idx ? "active" : "")} key={idx}>
                {content}
              </article>
            );
          }, this)}
        </section>
      </div>
    );
  }
});
