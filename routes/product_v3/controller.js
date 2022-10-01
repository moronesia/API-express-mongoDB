const { ObjectId } = require('mongodb');
const db = require('../../config/mongodb');


const index = (req, res) => {
    db.collection('products').find()
        .toArray()
        .then(result => res.send(result))
        .catch(error => res.send(error))
}

const view = (req, res) => {
    const {id} = req.params;
    db.collection('products').findOne({_id: ObjectId(id)})
        .then(result => res.send(result))
        .catch(error => res.send(error))
}

const post = (req, res) => {
    const { name, price, stock, status } = req.body;
    db.collection('products')
        .insertOne({name, price, stock, status})
        .then(result => res.send(result))
        .catch(error => res.send(error))
}

const update = (req, res) => {
    const { name, price, stock, status } = req.body;
    const { id } = req.params;
      db.collection("products")
        .updateOne({ _id: ObjectId(id) }, { $set: { name, price, stock, status} })
        .then((result) => res.send(result))
        .catch((error) => res.send(error));
  };

const destroy = (req, res) => {
    const { id } = req.params;
    db.collection('products')
        .deleteOne({ _id: ObjectId(id) })
        .then((result) => res.send(result))
        .catch((error) => res.send(error));
  };

module.exports = {
    index,
    view,
    post,
    update,
    destroy
}