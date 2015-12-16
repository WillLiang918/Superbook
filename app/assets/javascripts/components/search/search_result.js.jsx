var SearchResult = React.createClass({
  render: function() {
    var {result: user, search} = this.props;
    var userUrl = "/users/" + user.id;
    var avatarUrl = user.avatar.profile;
    var name = user.first_name + " " + user.last_name;

    var regex = new RegExp(search, "i");
    var testName = function(obj) { return regex.test(obj.name); };
    var subData = {
      "nicknames": [],
      "abilities": []
    };
    for (var attr in subData) {
      if (user && user[attr]) {
        subData[attr] = user[attr].filter(testName);
      }
    }

    subheader = (
      <div className="search-subheader flex-column">
        {
          Object.keys(subData).map(function(attr, idx) {
            var data = subData[attr];
            if (!data.length) return null;

            return (
              <div key={idx} className="subheader-container">
                <span className="subheader-title capitalize">{attr}</span>
                <span>{data.map(obj => obj.name).join(", ")}</span>
              </div>
            );
          })
        }
      </div>
    );

    return (
      <Link to={userUrl}>
        <img src={avatarUrl} className="search-result-thumb" />
        <div className="flex-column">
          <div>{name}</div>
          {subheader}
        </div>
      </Link>
    );
  }
});
