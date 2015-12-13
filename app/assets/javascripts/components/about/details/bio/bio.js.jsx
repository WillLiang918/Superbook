var Bio = React.createClass({
  render: function() {
    return (
      <div>
        <h4>Origin Story</h4>
        <AboutField name="bio" show={BioShow} form={BioForm} {...this.props} />
      </div>
    );
  }
});
