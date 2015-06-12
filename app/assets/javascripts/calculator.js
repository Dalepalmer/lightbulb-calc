var Pizza = {
  cut: 0,

  pizzaCut: function() {
    if (this.topping === "Pepperoni") {
      this.cut = this.diameter * 4 ;
      return 2 * Math.floor(this.cut / 2);
    } else {
      this.cut = this.diameter / 3.14;
      return 2 * Math.ceil(this.cut / 2);
    }
  }
};

$(document).ready(function() {



  $("form#pizza-form").submit(function(event) {
    event.preventDefault();

    var inputtedDiameter = $("input#pizza-size").val();
    var inputtedName = $("input#customer").val();
    var inputtedTopping = $("select#topping").val();

    var newPizza = Object.create(Pizza);
    newPizza.customerName = inputtedName;
    newPizza.diameter = inputtedDiameter;
    newPizza.topping = inputtedTopping;
    newPizzaCut = newPizza.pizzaCut();

    $("form#pizza-form").hide();
    $("ul#customer").append("<p>" + "Customer Name:" + " " + newPizza.customerName + "</p>");
    $("ul#toppings").append("<p>" + "Toppings:" + " " + newPizza.topping + "</p>");
    $("ul#pizza-output").append("<p>" + "Amount of slices:" + " " + newPizzaCut + "</p>");
  });
});
