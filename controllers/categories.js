const Category = require('../models/category');
const { errorHandler } = require("../helpers/dbErrorHandler");

module.exports = {
    create,
    categoryById,
    getOne,
    getAll,
    update,
    deleteOne
}

function deleteOne (req, res) {
    const category = req.category
    category.remove((err) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        res.json({
            message: 'Category has been deleted'
        });
    });

};

function update (req, res) {
    const category = req.category
    category.name = req.body.name
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        res.json(data);
    });

};

function getAll (req, res) {
    Category.find().exec((err, data) => {
        if(err) {
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        res.json(data);
    })
}

function getOne(req, res) {
    return res.json(req.category)
}

function categoryById(req, res, next, id) {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            return res.status(400).json({
                err: 'Category does not exist'
            });
        }
        req.category = category;
        next();
    });
};

function create(req, res) {
    const category = new Category(req.body)
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        res.json({ data });
    });
};