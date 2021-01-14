const Drink = require("../models/DrinkModels");

class drinkServices {
  getDrinks() {
    const query = Drink.find().exec();
    return query;
  }
  getDrinkByName(name) {
    const query = Drink.findOne({ name: name }).exec();
    return query;
  }
  postDrinks(drink) {
    const newDrink = new Drink(drink);
    return newDrink.save();
  }
  upadteDrinks(id, data) {
    const query = Drink.findOneAndUpdate({ _id: id }, data).exec();
    return query;
  }
  deleteDrinks(id) {
    const query = Drink.deleteOne({ _id: id });
    return query;
  }
}

module.exports = drinkServices;
