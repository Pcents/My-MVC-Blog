const { posts, Post } = require("../models");

const blogposts = [
  {
    post_id: 1,
    post: "I was traveling through the Mojave Desert when suddenly a triangle shape of lights showed up. I watched them hover in silence and come closer. I grabbed my phone to take a photo and notice it was 3 hours later and the lights were gone",
  },
  {
    post_id: 2,
    post: "Are there any panthers in Griffith Park?  I feel like I saw a large black cat skulking around near the observatory",
  },
  {
    post_id: 3,
    post: "I could see some glowing things, like eyes above.  I was scared and turned my car around.  I think it was the Mothman trying to warn us of the bridge, THE BRIDGE!",
  },
];

const seedPostData = () => Post.bulkCreate(blogposts);

module.exports = seedPostData;
