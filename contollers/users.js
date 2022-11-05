import { v4 as uuidv4 } from 'uuid';

let users = []

export const createUser = (req,res) => {
    console.log('POST ROUTE REACHED');

    const user = req.body;

    //const userID = uuidv4();

    //const userWithID = {... user, id: uuidv4()}

    users.push({... user, id: uuidv4()});

    res.send(`USer with username${user.name} added to databasem`)

}

export const getUser = (req, res) => {
    console.log(users);
    res.send(users);
}

export const finfUserById = (req,res) => {
    const { id } = req.params;
    
    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
}

export const deleteById = (req,res) => {
    const { id } = req.params;
    
    users = users.filter((user) => user.id !== id);

    res.send(`User with id ${id} deleted from database`)
}

export const updateById = (req,res) => {
    const { id } = req.params;
    const {name, lastName, age} = req.body;
    const user = users.find((user) => user.id == id);

    if(name){
        user.name = name;
    }

    if(lastName){
        user.lastName = lastName;
    }

    if(age){
        user.age = age;
    }

    res.send(`User with id ${id} was updated`)
}