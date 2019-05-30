require("dotenv").config();
const express = require("express");
const massive = require("massive");
const products_controller = require("./products_controller");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const PORT = SERVER_PORT;

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("Database Connected :)");
});

app.use(express.json());

app.post("/api/products", products_controller.create);
app.get("/api/products", products_controller.getAll);
app.get("/api/products/:id", products_controller.getOne);
app.put("/api/products/:id", products_controller.update);
app.delete("/api/products/:id", products_controller.delete);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
