export interface Hero {

    id :                  number,
    name:                 string,
    owner:                string
}

export const heroes : Hero[] = [
    {
        id:1,
        name:'batman',
        owner:'DC'
    },
    {
        id:2,
        name:'superman',
        owner:'marvel'
    },
    {
        id:3,
        name:'power ranger',
        owner:'Banday'
    }
]

// empezamos a usar export const
/* module.exports = {

    heroes
} */