var BirthdayForm = React.createClass({
  getInitialState: function() {
    var birthday = moment(this.props.user.birthday);
    return {
      birthday_day: birthday.date(),
      birthday_month: birthday.month() + 1,
      birthday_year: birthday.year()
    };
  },
  render: function() {
    var months = moment.monthsShort().map(function(month, idx) {
      return <option value={idx + 1} key={idx + 1}>{month}</option>;
    }, this);

    var years = [], minYear = 1905, maxYear = moment().year();
    for (var year = minYear; year <= maxYear; year++) {
      years.push(<option value={year} key={year}>{year}</option>);
    }

    var days = [];
    for (var day = 1; day <= 31; day++) {
      days.push(<option value={day} key={day}>{day}</option>);
    }

    return (
      <div className="flex-container max-width">
        <div>Birth Date</div>

        <form className="about-field-form">
          <select name="birthday_month" value={this.state.birthday_month} onChange={this.onChange}>
            <option value="0" key="0">Month</option>
            {months}
          </select>

          <select name="birthday_day" value={this.state.birthday_day} onChange={this.onChange}>
            <option value="0" key="0">Day</option>
            {days}
          </select>

          <select name="birthday_year" value={this.state.birthday_year} onChange={this.onChange}>
            <option value="0" key="0">Year</option>
            {years}
          </select>
        </form>

        <div>
          <button className="blue save fb-btn" onClick={this.save} data-name="birthday">Save</button>
          <button className="gray cancel fb-btn" onClick={this.props.toggleEdit} data-name="birthday">Cancel</button>
        </div>
      </div>
    );
  },
  onChange: function(e) {
    var target = e.target;
    var name = target.name, value = target.value;
    this.state[name] = value;
    this.forceUpdate();
  },
  save: function(e) {
    ApiUtil.updateUser(this.props.user.id, this.state);
    this.props.toggleEdit(e);
  }
});
