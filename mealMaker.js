let menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return (this._meal = mealToCheck);
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return (this._price = priceToCheck);
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      console.log(`Today's special is ${this._meal} for $${this._price}`);
    } else {
      console.log("Meal or price was not set correctly");
    }
  },
};
menu.price = 100;
menu.meal = "Steak";

menu.todaysSpecial;
