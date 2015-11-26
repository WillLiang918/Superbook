var BlankSearch = React.createClass({
  render: function() {
    var search = this.props.search;
    return (
      <li className="blank-search flex-container">
        <strong className="blank-search-icon" />
        <p>
          We couldn't find anything for
          <span className="search-text"> {search}</span>
        </p>
      </li>
    );
  }
});
