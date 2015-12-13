var Hometown = React.createClass({
  render: function() {
    return <AboutField name="hometown" form={HometownForm} show={HometownShow} {...this.props} />;
  }
});
