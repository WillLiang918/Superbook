var SearchResults = React.createClass({
  render: function() {
    if (!this.props.active) return false;

    var {search, handleSubmit, handleClick, className, onMouseEnter, onMouseLeave, results, ...other} = this.props;
    return (
      <section
        className={"search-results " + (this.props.className || "")}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >

        <ul>
          {results.map(function(result) {
            var name = result.first_name + " " + result.last_name;

            return (
              <li key={result.id} onClick={handleClick} data-name={name}>
                <SearchResult result={result} />
              </li>
            );
          }, this)}

          <li key="submit">
            <SearchSubmitRow search={search} handleSubmit={handleSubmit}/>
          </li>
        </ul>

      </section>
    );
  }
});
