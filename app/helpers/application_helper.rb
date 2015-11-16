module ApplicationHelper
  MONTHS = {
    "0" => "Month",
    "1" => "Jan",
    "2" => "Feb",
    "3" => "Mar",
    "4" => "Apr",
    "5" => "May",
    "6" => "Jun",
    "7" => "Jul",
    "8" => "Aug",
    "9" => "Sep",
    "10" => "Oct",
    "11" => "Nov",
    "12" => "Dec"
  }

  DAYS = {
    "0" => "Day"
  }
  ("1".."31").each { |day| DAYS[day] = day }

  YEARS = {
    "0" => "Year"
  }
  ("1905"..Time.now.year.to_s).reverse_each { |year| YEARS[year] = year }
end
