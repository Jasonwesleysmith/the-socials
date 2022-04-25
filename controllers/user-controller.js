const {User} = require('../models')

const userController = {
    getAllUsers(req, res) {
        User.find()
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            res.status(400).json(err);
        })
    
    },
    getUserById(req, res) {
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .populate('friends')
        .populate('thoughts')
        .then((dbUserData) => {
            if (!dbUserData) {
               return res.status(404).json({message: "No match!"}) 
            }
            res.json(dbUserData)
        })
        .catch(err => {
            res.status(400).json(err);
        })

        
    }    

}

module.exports = userController;