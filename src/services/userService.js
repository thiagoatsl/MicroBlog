const User = require('../models/User');
const logger = require('../logger');

async function createUser(username, email) {
    try {
        const user = new User({ username, email });
        await user.save();
        console.log("Usuário criado:", user);
        return user;
    } catch (error) {
        logger.error(error);
    }
}

async function findUsers() {
    try {
        const users = await User.find();
        console.log("Usuários encontrados:", users);
        return users;
    } catch (error) {
        logger.error(error);
    }
}

async function deleteUser(id) {
    try {
        await User.findByIdAndDelete(id);
        console.log("Usuário deletado:", id);
    } catch (error) {
        logger.error(error);
    }
}

module.exports = { createUser, findUsers, deleteUser };