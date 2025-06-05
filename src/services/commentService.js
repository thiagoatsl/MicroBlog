const Comment = require('../models/Comment');
const logger = require('../logger');

async function createComment(postId, userId, text) {
    try {
        const comment = new Comment({ post: postId, user: userId, text });
        await comment.save();
        console.log("Comentário criado:", comment);
        return comment;
    } catch (error) {
        logger.error(error);
    }
}

async function findComments() {
    try {
        const comments = await Comment.find().populate('user').populate('post');
        console.log("Comentários encontrados:", comments);
        return comments;
    } catch (error) {
        logger.error(error);
    }
}

async function deleteComment(id) {
    try {
        await Comment.findByIdAndDelete(id);
        console.log("Comentário deletado:", id);
    } catch (error) {
        logger.error(error);
    }
}

module.exports = { createComment, findComments, deleteComment };