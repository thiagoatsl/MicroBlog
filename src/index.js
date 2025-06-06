const connectDB = require('./db');

const { createUser, findUsers, deleteUser } = require('./services/userService');
const { createPost, findPosts, deletePost } = require('./services/postService');
const { createComment, findComments, deleteComment } = require('./services/commentService');

async function run() {
    await connectDB();

    const user = await createUser('gugu', 'gugu@gmail.com');
    const post = await createPost(user._id, 'meu primeiro post!');
    const comment = await createComment(post._id, user._id, 'parabéns!');

    await findUsers();
    await findPosts();
    await findComments();

    await deleteComment(comment._id);
    await deletePost(post._id);
    await deleteUser(user._id);

    console.log("Demonstração completa.");
}

run();
