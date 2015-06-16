var Usage = {

    usageCalc: function() {
      var watts = 0,
      newWatt = 0,
      newKiloWatts = 0,
      kiloWatts = 0,
      kiloWattDiff = 0;
      yearlyDiff = 0;

      if (this.currentBulb === "Incandescent") {
        watts = 60;
      } else {
      watts = 12;
    }
      if (this.newBulb === "LED") {
        newWatt = 8;
      } else {
        newWatt = 12;
    }

    kiloWatts = watts * this.hours;
    newKiloWatts = newWatt * this.hours;
    kiloWattDiff = kiloWatts - newKiloWatts;

    return kiloWattDiff * this.count / 1000
  }
};

$(document).ready(function() {
  $("form#lightbulb-form").submit(function(event) {
    event.preventDefault();

    var count = $("input#bulb-count").val();
    var inputtedHours = $("input#hours").val();
    var currentBulb = $("select#current-type").val();
    var newBulb = $("select#new-type").val();

    var newUsage = Object.create(Usage);
    newUsage.hours = inputtedHours;
    newUsage.currentBulb = currentBulb;
    newUsage.newBulb = newBulb;
    newUsage.count = count;
    newUsageCalc = newUsage.usageCalc();
    yearlyDiff = newUsageCalc * 365;
    dollarSavings = Math.floor(yearlyDiff * .12);
    centSavings = (yearlyDiff * .12 % 1).toFixed(2) * 100;


    $("form#lightbulb-form").hide();
    $("ul#lightbulb-output").append("<p>" + "Amount of Energy Saved:" + " " + newUsageCalc + " Kilowatts-hours" + " Per Day" + "</p>");
    $("ul#lightbulb-year").append("<p>" + "Which adds up to " + yearlyDiff + " Kilowatt-hours a year" + "<p>");
    $("ul#lightbulb-savings").append("<p>" + "Which at the average rate of 12 cents per kilowatt-hour adds up to a savings of " + dollarSavings + " dollars and " + centSavings + " cents" + " a year" + "<p>");
  });
});
