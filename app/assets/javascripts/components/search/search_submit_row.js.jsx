var SearchSubmitRow = React.createClass({
  render: function() {
    return (
      <a className="search-submit-row">
        <strong className="search-submit-icon" />
        <div>{"See all results for \"" + this.props.search + "\""}</div>
      </a>
    );
  }
});
