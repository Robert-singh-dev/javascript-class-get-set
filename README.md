# 🍕 JavaScript Object, Class, Getter & Setter - Pizza Example

## Overview
This example demonstrates how to work with **Objects**, **Classes**, and **Getters/Setters** in JavaScript, using a **Pizza** example.

---

## Explanation

### 📦 Object Literal
- The `pizza` object is a simple **object literal** with properties (`type`, `size`, `crust`, `toppings`) and a method (`bake()`).
- This is a quick way to define a single object directly.
- The `bake()` method prints a message using the object’s properties.

---

### 🏛️ Class Definition
- The `myPizza` class serves as a **blueprint** to create multiple pizza objects.
- It defines a `constructor()` method to initialize each pizza's properties.
- The class also contains a `bake()` method to log a message similar to the object’s method.

---

### 🎚️ Using Getters and Setters
- `myPizza` includes **getter and setter methods** for `toppings` and `coke`.
- This allows controlled access and modification of these properties.
- Getters retrieve the value, and setters allow updating the value with custom logic if needed.

#### Example:
```js
newPizza.toppingsPizza = "sausage";  // Using setter to change toppings
console.log(newPizza.toppingsPizza);  // Using getter to read toppings
