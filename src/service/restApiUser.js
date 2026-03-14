import axios from "axios";

//http://localhost:5000 Global URL for the API
//http://localhost:5000/Users gestion des users
//http://localhost:5000/cars gestion des cars
//http://localhost:5000/reservations gestion des reservations

//http://localhost:5000/Users/getAllUsers get all users
//http://localhost:5000/Users/getUserById/:id get user by id
//http://localhost:5000/Users/addUser add user
//http://localhost:5000/Users/updateUser/:id update user
//http://localhost:5000/Users/deleteUser/:id delete user
const API_URL = "http://localhost:5000/users";

export async function getAllUsers() {
    return await axios.get(`${API_URL}/getAllUsers`);
}

export async function deleteUser(id) {
    return await axios.delete(`${API_URL}/deleteUser/${id}`);
}