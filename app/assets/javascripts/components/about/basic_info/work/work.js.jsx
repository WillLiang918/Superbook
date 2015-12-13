var Work = React.createClass({
  render: function() {
    return <AboutField name="work" form={WorkForm} show={WorkShow} {...this.props} />;
  }
});
