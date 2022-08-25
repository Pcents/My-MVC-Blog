const { Post } = require("../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const dbBlogData = await Post.findAll({});
    const blogPosts = dbBlogData.map((posts) => posts.get({ plain: true }));
    res.render("homepage", {
      blogPosts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
