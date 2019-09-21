// usado para pegar os likes
const Post = require('../models/Post.js');

module.exports = {
  async store(req, res) {
    const post = await Post.findById(req.params.id);
    post.likes += 1;
    await post.save();

    req.io.emit('like', post); // vai emitir para todos os usuários que estão conectados

    return res.json({ post });
  },
};
