var SearchSubheader = React.createClass({
  render: function() {
    var {user, search} = this.props;
    var regex = new RegExp(search, "i");
    var testName = function(obj) { return regex.test(obj.name); };

    return (
      <div className="search-subheader flex-column">
        {
          ["nicknames", "abilities"].map(function(attr, idx) {
            if (!user || !user[attr]) { return null; }
            var data = user[attr].filter(testName);
            if (!data.length) { return null; }

            return (
              <div key={idx} className="subheader-container">
                <span className="subheader-title capitalize">{attr}:</span>
                <span>{data.map(obj => obj.name).join(", ")}</span>
              </div>
            );
          })
        }
      </div>
    );
  }
});
