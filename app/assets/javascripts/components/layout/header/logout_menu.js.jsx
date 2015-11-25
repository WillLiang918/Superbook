var LogoutMenu = React.createClass({
  render: function() {
    return (
      <DropDown className="logout-menu">
        <LogoutButton _onClick={this.triggerSubmit} />
      </DropDown>
    );
  },
  triggerSubmit: function(e) {
    var $target = $(e.target);
    $target.find("form").submit();
  }
});
