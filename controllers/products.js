const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Product = require('../models/product')
const { errorHandler } = require("../helpers/dbErrorHandler");

module.exports = {
    create,
    productById,
    getOne,
    deleteOne,
    update
}

function update(req, res) {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                err: 'Image could not be uploaded'
            })
        }
        const { name, price, category, quantity, shipping } = fields

        if (!name || !price || !category || !quantity || !shipping) {
            return res.status(400).json({
                err: 'All fields are required'
            });
        }

        let product = req.product
        product = _.extend(product, fields);

        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    err: 'Image should be less than 1mb in size'
                });
            }
            product.photo.data = fs.readFileSync(files.photo.path)
            product.photo.contentType = files.photo.type
        }

        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    err: errorHandler(err)
                })
            }
            res.json(result);
        })
    })
};

function deleteOne(req, res) {
    let product = req.product
    product.remove((err, deletedProd) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        res.json({
            message: 'Product has been deleted'
        })
    })
}

function getOne(req, res) {
    req.product.photo = undefined
    return res.json(req.product);
}

function productById(req, res, next, id) {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            return res.status(400).json({
                err: 'Product not found'
            });
        }
        req.product = product
        next();
    });
};

function create(req, res) {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                err: 'Image could not be uploaded'
            })
        }
        const { name, price, category, quantity, shipping } = fields

        if (!name || !price || !category || !quantity || !shipping) {
            return res.status(400).json({
                err: 'All fields are required'
            });
        }

        let product = new Product(fields)

        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    err: 'Image should be less than 1mb in size'
                });
            }
            product.photo.data = fs.readFileSync(files.photo.path)
            product.photo.contentType = files.photo.type
        }

        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    err: errorHandler(err)
                })
            }
            res.json(result);
        })
    })
};