interface User{
    
    id:                number,
    name:              string
}

export const users = [
    {
        id : 1,
        name: 'Jhon Doe'
    },
    {
        id : 2,
        name: 'Jhony Doe'
    }
]

export const getUserByIdArrow = ( id: number , callback : (err?:string, user?:User) => void) => {

    const user = users.find( user => user.id === id );

    if( !user ) return callback(`User not found with id ${id}`);

    return callback( undefined , user );   
}

/* module.exports = {

    getUserByIdArrow
} */