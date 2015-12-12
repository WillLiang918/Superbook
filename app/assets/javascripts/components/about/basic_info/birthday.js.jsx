var Birthday = React.createClass({
  render: function() {
    return <AboutField name="birthday" form={BirthdayForm} show={BirthdayShow} {...this.props} />;
  }
});
