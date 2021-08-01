// constructor order function

function Order(type, size, crust, topping) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}

// getting price of size and pizza type contral flow

Order.prototype.getSize = function () {
  if (this.type == 0) {
    if (this.size === 0) {
      return 600;
    } else if (this.size === 1) return 1000;
    else {
      return 1500;
    }
  } else if (this.type == 1) {
    if (this.size === 0) {
      return 300;
    } else if (this.size === 1) return 800;
    else {
      return 2000;
    }
  } else if (this.type == 2) {
    if (this.size === 0) {
      return 500;
    } else if (this.size === 1) return 1000;
    else {
      return 2500;
    }
  } else if (this.type == 3) {
    if (this.size === 0) {
      return 600;
    } else if (this.size === 1) return 1500;
    else {
      return 2500;
    }
  } else if (this.type == 4) {
    if (this.size === 0) {
      return 500;
    } else if (this.size === 1) return 950;
    else {
      return 2000;
    }
  } else if (this.type == 5) {
    if (this.size === 0) {
      return 400;
    } else if (this.size === 1) return 850;
    else {
      return 2200;
    }
  } else {
    return false;
  }
};

// prototypes for crust and toppings prices.

Order.prototype.getCrust = function () 

   {
  if (this.crust === 0)
   {
    return 100;
  } 
  else if (this.crust === 1)
   {
    return 50;
  }
   else if (this.crust === 2) 
   {
    return 200;
  }
};

Order.prototype.getTopping = function ()
   
     {
  if (this.topping === 0)
     {
    return 300;
  } 
  else if (this.topping === 1) 
  {
    return 50;
  } 
  else if (this.topping === 2) 
  {
    return 200;
  }
   else if (this.topping === 3)
    {
    return 100;
  }
};

// bill yako function for full bill

function billYako() {
  var sum = 0;

  $(".billPerOrder").each(() => {
    var value = $(this).text();

    if (!isNaN(value) && value.length != 0) 
    {
      sum += parseFloat(value);
    }
  });
  if (document.getElementById("yes").checked) 
      
       {
    var result = `Your order cost is Ksh ${sum} plus a delivery fee of Ksh 200 `;
    var orderBill = sum + 200;
    var total = "Total: Ksh. " + orderBill;
    $("#result").text(result);
    $("#totalCost").text(total);

    swal({
      title:
        "Note! Delivery of your order to location specified will cost ksh 200 extra",
      icon: "",
    });
  } else {
    var total = "Total: Ksh. " + sum;
    $("#totalCost").text(total);
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