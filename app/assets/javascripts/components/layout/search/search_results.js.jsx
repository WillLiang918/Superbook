var SearchResults = React.createClass({
  render: function() {
    if (!this.props.focus) return false;

    return (
      <section className={"search-results " + (this.props.className || "")}>
        <ul>
          <li>
            <a>
              <div className="search-result-thumb"></div>
              <div>Username</div>
            </a>
          </li>
          <li>
            <a>
              <div className="search-result-thumb"></div>
              <div>Username</div>
            </a>
          </li>
          <li>
            <a>
              <div className="search-result-thumb"></div>
              <div>Username</div>
            </a>
          </li>
        </ul>
      </section>
    );
  }
});
