const router = require('express').Router();
const{
    getAllUsers,

} = require('../controllers/user-controller')

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//router friends post and delete    

//single user get, put & delete