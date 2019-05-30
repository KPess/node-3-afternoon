module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, description, price, image_url } = req.body;

    dbInstance
      .create_product(name, description, price, image_url)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "The squirrel got into the server again!" });
        console.log(err);
      });
  },
  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    dbInstance
      .read_product(id)
      .then(product => res.status(200).send(product))
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "The hamster made a nest in our database!" });
        console.log(err);
      });
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "The iguana laid eggs in our database!" });
        console.log(err);
      });
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;

    dbInstance
      .update_product(params.id, query.desc)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res
          .status(500)
          .send({
            errorMessage: "Someone let Cleetus into the server room again."
          });
        console.log(err);
      });
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    dbInstance
      .delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "Thanos snapped half our database." });
        console.log(err);
      });
  }
};
