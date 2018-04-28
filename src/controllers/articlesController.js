const db = require("../models");

module.exports {
    findAll: function(req, res) {
        db.Article
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    saveArticle: function(req, res) {
        db
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    deleteArticle: function(req, res) {
        db.Article
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel =>res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};