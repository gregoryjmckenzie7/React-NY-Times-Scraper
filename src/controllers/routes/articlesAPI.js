const router = require("express").Router();
const controller = require("../articlesController");

router.route("/")
    .get(controller.findAll)
    .post(controller.saveArticle)

router.route("/:id")
    .delete(controlller.deleteArticle)

module.exports = router;