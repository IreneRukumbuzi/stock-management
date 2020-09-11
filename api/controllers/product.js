const product = require("../models").product;


exports.getProducts = (req, res) => {
    return product.findAll()
    .then((products) => res.status(200).send(products))
    .catch((error) => { res.status(400).send(error); });
}
exports.getOneProduct = (req, res)=> {
  return product.findByPk(req.params.id, {
    })
    .then((product) => {
        if (!product) {
        return res.status(404).send({
            message: 'product Not Found',
        });
        }
        return res.status(200).send(product);
    })
    .catch((error) => res.status(400).send(error));
}