const Product = require("../models").Product;

exports.getProducts = (req, res) => {
  return Product.findAll()
    .then((products) => res.status(200).send(products))
    .catch((err) => console.log(err));
};

exports.createProduct = (req, res) => {
  return Product.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  })
    .then((product) => res.status(201).send(product))
    .catch((error) => res.status(400).send(error));
};

exports.updateProduct = (req, res) => {
    return Product
      .findByPk(req.params.id)
      .then(product => {
        if (!product) {
          return res.status(404).send({
            message: 'Product Not Found',
          });
        }
        return product
          .update({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            manufactured_date: req.body.manufactured_date
          })
          .then(() => res.status(200).send(product))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  exports.deleteProduct = (req, res) =>{
    return Product
      .findByPk(req.params.id)
      .then(product => {
        if (!product) {
          return res.status(404).send({
            message: 'Product Not Found',
          });
        }
        return product
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }

