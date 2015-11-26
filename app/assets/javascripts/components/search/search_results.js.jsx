var SearchResults = React.createClass({
  render: function() {
    var {active, search, handleSubmit, handleClick, className, onMouseEnter, onMouseLeave, results, ...other} = this.props;
    if (!active || !search) { return false; }

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

          <li key="submit" className={results.length === 0 ? "no-result" : ""}>
            <SearchSubmitRow search={search} handleSubmit={handleSubmit}/>
          </li>
        </ul>

      </section>
    );
  }
});
