const pizza = {
  type: "cheese",
  size: "large",
  crust: "thick",
  toppings: "olives",
  bake: function () {
    return console.log(
      `Baking a ${this.size} ${this.crust} crust pizza. with ${this.toppings}`
    );
  },
};

class myPizza {
  constructor(typePizza, sizePizza, crustPizza, toppingsPizza, extraCoke) {
    this.type = typePizza;
    this.size = sizePizza;
    this.crust = crustPizza;
    this.toppings = toppingsPizza;
    // the goal here is to chnage this value by using getter setter
    this.coke = extraCoke;
  }

  // get set for toppings
  get toppingsPizza() {
    return this.toppings;
  }

  set toppingsPizza(toppings) {
    this.toppings = toppings;
  }

  // get set for coke
  get extraCoke() {
    return this.coke;
  }

  set extraCoke(coke) {
    this.coke = coke;
  }

  bake() {
    return console.log(
      `Baking a ${this.type} ${this.crust} crust pizza with ${this.toppings}`
    );
  }
}

// Creating an "const newPizza" instance is necessary because classes themselves are just templates or blueprints for objects—they don’t hold any actual data until you create an instance.
const newPizza = new myPizza("chicken", "large", "full", "full toppings");

pizza.bake();
newPizza.bake();

console.log("Which are come after this is a getter and settter");

newPizza.toppingsPizza = "sausage";
newPizza.extraCoke = "coke added";
newPizza.bake();
