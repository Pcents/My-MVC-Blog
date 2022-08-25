const User = require("./User");
const Post = require("./Post");

// Add joins
Post.hasOne(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
