
 //business logic
 function Order(type, size, crust, topping) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}

//get crust price
Order.prototype.getCrust = function () {
  if (this.crust === 0) {
      return 100
  } else if (this.crust === 1) {
      return 50
  } else if (this.crust === 2) {
      return 200
  }
}

//get topping price
Order.prototype.getTopping = function () {
  if (this.topping === 0) {
      return 300
  } else if (this.topping === 1) {
      return 50
  } else if (this.topping === 2) {
      return 200
  } else if (this.topping === 3) {
      return 100
  }
}

//get size price
Order.prototype.getSize = function () {
  if (this.type == 0) {
      if (this.size === 0) {
          return 600
      } else if (this.size === 1)
          return 1000
      else {
          return 1500
      }
  } else if (this.type == 1) {
      if (this.size === 0) {
          return 300
      } else if (this.size === 1)
          return 800
      else {
          return 2000
      }
  } else if (this.type == 2) {
      if (this.size === 0) {
          return 500
      } else if (this.size === 1)
          return 1000
      else {
          return 2500
      }
  } else if (this.type == 3) {
      if (this.size === 0) {
          return 600
      } else if (this.size === 1)
          return 1500
      else {
          return 2500
      }
  } else if (this.type == 4) {
      if (this.size === 0) {
          return 500
      } else if (this.size === 1)
          return 950
      else {
          return 2000
      }
  } else if (this.type == 5) {
      if (this.size === 0) {
          return 400
      } else if (this.size === 1)
          return 850
      else {
          return 2200
      }
  } else {
      return false;
  }
}

//user Interface
//calculate total cost 
function billYako() {
  var sum = 0;
  $(".billPerOrder").each(function () {
      var value = $(this).text();
      if (!isNaN(value) && value.length != 0) {
          sum += parseFloat(value);
      }
  });
  if (document.getElementById('yes').checked) {
      var result = `Your order cost is Ksh ${sum} plus a delivery fee of Ksh 200 `;
      var orderBill = sum + 200;
      var total = "Total: Ksh. " + orderBill ;
      $('#result').text(result);
      $('#totalCost').text(total);

      swal({
          title: "Note! Delivery of your order to location specified will cost ksh 200 extra",
          icon: "",
      })

  } else {
      var total = "Total: Ksh. " + sum ;
      $('#totalCost').text(total)
  }
}


function checkout() {
  swal({
      title: `Order successfully placed 
       Thank You and Welcome to carmelitas`,
      icon: "success",
  }).then((value) => {
      location.reload();
  });
}

$(document).ready(function () {

  $('#checkout').click(function () {
    checkout();
})
  
  $('.radioBtn').change(function () {
      if (document.getElementById("yes").checked) {
          $('.location').show();
      } else {
          $('.location').hide();
      }
  });

  $('#addToCart').click(function () {
      var type = $('#type option:selected').val();
      var size = $('#size option:selected').val();
      var crust = $('#crust option:selected').val();
      var quantity = $('#quantity').val();
      var topping = $('#topping option:selected').val();
      var name = $('#name').val();

      //validate fields
      if (type == '' || size == '' || crust == '' || topping == '' || quantity == '' || name == '') {
        swal("Order fields empty!", "fill the order first");
      } else if (document.getElementById("yes").checked && $('#location').val() == '') {
        swal("Location field empty!", "fill the location field first");
      } else {
          var selectedType = parseInt($('#type option:selected').val());
          var selectedSize = parseInt($('#size option:selected').val());
          var selectedCrust = parseInt($('#crust option:selected').val());
          var quantity = parseInt($('#quantity').val());
          var selectedTopping = parseInt($('#topping option:selected').val());

          //create new order object

          var pizzaFunga = new Order(selectedType, selectedSize, selectedCrust, selectedTopping);

          //getting price of individual pizzas

          var soloPizza = (pizzaFunga.getSize() + pizzaFunga.getCrust() + pizzaFunga.getTopping()) * quantity;

          //append data to table
          $('.displayOrder').show();
          $(".table tbody:last").append("<tr>" +
              "<td>" + $('#type option:selected').text() + "</td>" +
              "<td>" + $('#size option:selected').text() + "</td>" +
              "<td>" + $('#crust option:selected').text() + "</td>" +
              "<td>" + $('#topping option:selected').text() + "</td>" +
              "<td>" + $('#quantity').val() + "</td>" +
              "<td><span class='billPerOrder'>" + soloPizza + "</span></td>" +
              "<td><input type='checkbox' name='record'></td>" +
              "</tr>");
          $(billYako);
      }
  })
  
})



