import Price from "../models/price.model";
import mongoose from "mongoose";

/** GET Method to get all the prices*/

exports.getPrice = async (req, res, next) => {
  await Price.find()

    .then((docs) => {
      const response = {
        count: docs.length,
        data: docs,
      };
      res.status(200).json({
        result: response,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

/**POST Method to create a new Price */

exports.createPrice = async (req, res, next) => {
  const price = await new Price({
    _id: mongoose.Types.ObjectId(),
    productId: req.body.productId,
    lastPrice: req.body.lastPrice,
  });
  price
    .save()

    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Price created",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

/**PATCH Method to update the specific price by priceId */

exports.updatePrice = async (req, res, next) => {
  const id = req.params.priceId;
  const updates = req.body;
  const options = { new: true };
  Price.findByIdAndUpdate(id, updates, options)
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

/**DELETE Method to delete the specific price by priceId */

exports.deletePrice = async (req, res, next) => {
  const id = req.params.priceId;
  await Price.remove({
    _id: id,
  })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Price deleted",
        data: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

/** GET Method to get the specific price by priceId*/

exports.getPriceById = async (req, res, next) => {
  const id = req.params.priceId;
  await Price.findById(id)
    .exec()
    .then((doc) => {
      console.log(doc);
      if (doc) {
        res.status(200).json({
          data: doc,
        });
      } else {
        res.status(404).json({ message: "No Matching Id " });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
