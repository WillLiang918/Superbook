var Abilities = React.createClass({
  render: function() {
    return (
      <div>
        <h4>Abilities</h4>
        <AboutField name="abilities" show={AbilitiesShow} form={AbilitiesForm} {...this.props} />
      </div>
    );
  }
});
