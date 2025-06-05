const Post = require('../models/Post');
const logger = require('../logger');

async function createPost(userId, content) {
    try {
        const post = new Post({ user: userId, content });
        await post.save();
        console.log("Post criado:", post);
        return post;
    } catch (error) {
        logger.error(error);
    }
}

async function findPosts() {
    try {
        const posts = await Post.find().populate('user');
        console.log("Posts encontrados:", posts);
        return posts;
    } catch (error) {
        logger.error(error);
    }
}

async function deletePost(id) {
    try {
        await Post.findByIdAndDelete(id);
        console.log("Post deletado:", id);
    } catch (error) {
        logger.error(error);
    }
}

module.exports = { createPost, findPosts, deletePost };