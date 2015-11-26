var SearchResults = React.createClass({
  render: function() {
    if (!this.props.active) return false;

    return (
      <section
        className={"search-results " + (this.props.className || "")}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
      >

        <ul>
          {this.props.results.map(function(result) {
            var name = result.first_name + " " + result.last_name;

            return (
              <li key={result.id} onClick={this.props.handleClick} data-name={name}>
                <SearchResult result={result} />
              </li>
            );
          }, this)}

          <li key="submit">
            <SearchSubmitRow search={this.props.search} />
          </li>
        </ul>

      </section>
    );
  }
});
