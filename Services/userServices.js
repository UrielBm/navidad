const User = require("../models/UserModels");

class userServices {
  getUsers() {
    const query = User.find();
    return query;
  }
  getUserByName(name) {
    const query = User.findOne({ name: name });
    return query;
  }
  postUsers(user) {
    const newUser = new User(user);
    return newUser.save();
  }
  updateUsers(id, data) {
    const query = User.findOneAndUpdate({ _id: id }, data);
    return query;
  }
  deleteUsers(id) {
    const query = User.deleteOne({ _id: id });
    return query;
  }
}

module.exports = userServices;
