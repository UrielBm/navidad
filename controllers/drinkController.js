class drinkController {
  constructor(drinkServices) {
    this.drinkServices = drinkServices;
  }
  async getDrink(req, res) {
    try {
      const response = await this.drinkServices.getDrinks();
      if (response) {
        const arraydrinks = response.map((item) => {
          return item;
        });
        res.status(200).json(arraydrinks);
      }
    } catch (e) {
      res.status(500).send(`Error al hacer la request tipo de error ${e}`);
    }
  }
  async postDrink(req, res) {
    const { name, mainIngredient } = req.body;
    const drink = req.body;
    if (name && mainIngredient) {
      try {
        const response = await this.drinkServices.postDrinks(drink);
        res.status(200).send("registro hecho con exito");
      } catch (e) {
        res.status(500).send(`Error al registrar la bebida tipo de error ${e}`);
      }
    } else {
      res
        .status(400)
        .send(
          `Error al hacer el registro, falta de parametros name and MainIngredient`
        );
    }
  }
  async updateDrink(req, res) {
    const { id } = req.params;
    const body = req.body;
    const data = body;
    if (id && body) {
      try {
        const response = await this.drinkServices.upadteDrinks(id, data);
        res
          .status(200)
          .send(
            `actualización de los datos en el elemento con id: ${id} correctamente`
          );
      } catch (e) {
        res
          .status(500)
          .send(`Error al itentar actualizar la info debebidas error ${e}`);
      }
    } else {
      res
        .status(400)
        .send(`ERROR al hacer el update falta del itendificador id o body`);
    }
  }
  async deleteDrink(req, res) {
    const { id } = req.params;
    if (id) {
      try {
        const response = await this.drinkServices.deleteDrinks(id);
        if (response) {
          res
            .status(200)
            .send(`Eliminación con exito del elemento con id ${id}`);
        }
      } catch (e) {
        res
          .status(500)
          .send(`Error al intentar eliminar el elemnto con nombre ${id}`);
      }
    } else {
      res.status(400).send(`falta el elemnto a elimnar por id`);
    }
  }
}

module.exports = drinkController;
