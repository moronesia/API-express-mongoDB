const Product = require('./model');


const view = (req, res) => {
    const { id } = req.params;
    Product.findOne({ _id: id })
      .then((result) => res.send(result))
      .catch((error) => res.send(error));
  };


const index = (req, res) => {
  Product.find()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};


const post = (req, res) => {
  const { name, price, stock, status } = req.body;
    Product.create({ name, price, stock, status })
      .then((result) => res.send(result))
      .catch((error) => res.send(error));
  };


const update = (req, res) => {
  const { name, price, stock, status } = req.body;
  const { id } = req.params;
    Product.updateOne({ _id: id }, { name, price, stock, status })
      .then((result) => res.send(result))
      .catch((error) => res.send(error));
  };


const destroy = (req, res) => {
    const { id } = req.params;
    Product.deleteOne({ _id: id })
      .then((result) => res.send(result))
      .catch((error) => res.send(error));
  };



module.exports = {
  index,
  view,
  post,
  update,
  destroy,
};