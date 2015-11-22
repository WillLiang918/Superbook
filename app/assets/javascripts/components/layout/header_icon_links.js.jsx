var HeaderIconLinks = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <div className="header-icon-links">
        <ul className="icon-link-list flex-container-start">
          <li className="active">
            <button className="friend-requests-icon" />
          </li>
        </ul>

        <section className="header-icon-content">
          <article className="content-tab active">
            <header className="content-tab-header">
              <h3>Header</h3>
            </header>

            <FriendRequestList requesters={this.props.requesters} />
          </article>
        </section>
      </div>
    );
  }
});
