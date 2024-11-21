const users = [
    {
        id : 1,
        name: 'Jhon Doe'
    },
    {
        id : 2,
        name: 'Jhony Doe'
    }
]

const getUserByIdArrow = ( id , callback ) => {

    const user = users.find( user => user.id === id );

    if( !user ) return callback(`User not found with id ${id}`);

    return callback( null , user );   
}

module.exports = {

    getUserByIdArrow
}