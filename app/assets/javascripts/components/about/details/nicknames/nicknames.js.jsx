var Nicknames = React.createClass({
  render: function() {
    return (
      <div>
        <h4>Aliases</h4>
        <AboutField name="nicknames" show={NicknamesShow} form={NicknamesForm} {...this.props} />
      </div>
    );
  }
});
