const userServices = require("../Services/userServices");

class userController {
  constructor(userServices, drinkServices) {
    this.userServices = userServices;
    this.drinkServices = drinkServices;
  }
  async getUser(req, res) {
    try {
      const response = await this.userServices.getUsers();
      if (response) {
        const arrayUser = response.map((user) => {
          return user;
        });
        res.status(200).json(arrayUser);
      }
    } catch (e) {
      res
        .status(500)
        .send(`error al hacer la petición intente nuevamente ${e}`);
    }
  }
  async getUserByName(req, res) {
    const { name } = req.params;
    try {
      const response = await this.userServices.getUserByName(name);
      const { favDrink } = response;
      if (favDrink) {
        const drink = await this.drinkServices.getDrinkByName(favDrink);
        const { mainIngredient } = drink;
        const dataResult = {
          name: response.name,
          age: response.age,
          favDrink: favDrink,
          mainIngredient: mainIngredient,
        };
        res.status(200).json(dataResult);
      } else {
        const data = {
          name: response.name,
          age: response.age,
          favDrink: "",
          mainIngredient: "",
        };
        res.status(200).json(data);
      }
    } catch (e) {
      res.status(500).send(`error al recuperar la query intente de nuevo`);
    }
  }
  async postUser(req, res) {
    const { name, age } = req.body;
    const user = req.body;
    if (name && age) {
      try {
        const response = await this.userServices.postUsers(user);
        res.status(200).send(`se realizo el registro de usuario exitosamente`);
      } catch (e) {
        res,
          status(500).send(
            `error no se realizo el registro tipo de error ${e}`
          );
      }
    } else {
      res
        .status(400)
        .send(
          `bad request falto información requerida en el body, intenta de nuevo`
        );
    }
  }
  async updateUser(req, res) {
    const { id } = req.params;
    const data = req.body;
    console.log(id, data);
    if (id && data) {
      try {
        const response = await this.userServices.updateUsers(id, data);
        res.status(200).send(`Update hecho con exito del id ${id}`);
      } catch (e) {
        res
          .status(500)
          .send(`error al realizar la update de usuario ${id} error ${e}`);
      }
    } else {
      res.status(400).send(`bad request falto el id a modificar o la data`);
    }
  }
  async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const response = await this.userServices.deleteUsers(id);
      res
        .status(200)
        .send(`Eliminación del registro con id ${id} exitosamente`);
    } catch (e) {
      res
        .status(500)
        .send(`ERROR al intentar eliminar el registro, intente nuevamente`);
    }
  }
}

module.exports = userController;
