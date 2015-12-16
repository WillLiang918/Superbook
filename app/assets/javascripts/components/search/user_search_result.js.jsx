var UserSearchResult = React.createClass({
  render: function() {
    return (
      <article className="user-search-result">
        <Friend {...this.props}>
          <SearchSubheader {...this.props} />
        </Friend>
      </article>
    );
  }
});
