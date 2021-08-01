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
