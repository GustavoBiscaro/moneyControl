const jwt = require('jsonwebtoken');

const createUserToken = async(user, req, res) => {

    // create a token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, "oursecret")

    // return the token
    res.status(200).json({
        message: "You are now authenticated",
        token: token,
        userId: user._id,
    })
}

module.exports = createUserToken
