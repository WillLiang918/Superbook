var Birthday = React.createClass({
  render: function() {
    if (this.props.editing.has("birthday")) {
      return <BirthdayForm {...this.props} />;
    } else {
      return <BirthdayShow {...this.props} />;
    }
  }
});
