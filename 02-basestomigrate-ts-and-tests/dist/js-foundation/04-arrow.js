"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdArrow = exports.users = void 0;
exports.users = [
    {
        id: 1,
        name: 'Jhon Doe'
    },
    {
        id: 2,
        name: 'Jhony Doe'
    }
];
const getUserByIdArrow = (id, callback) => {
    const user = exports.users.find(user => user.id === id);
    if (!user)
        return callback(`User not found with id ${id}`);
    return callback(undefined, user);
};
exports.getUserByIdArrow = getUserByIdArrow;
/* module.exports = {

    getUserByIdArrow
} */ 
