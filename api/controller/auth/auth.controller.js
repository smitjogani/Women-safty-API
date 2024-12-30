const userService = require('../../services/user/user.services');
const jwtProvider = require("../../../config/jwtProvider.js");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    try {
        // console.log(req.body);
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);

        return res.status(200).send({ jwt, message: "Successfully Registered" });
    } catch (error) {
        // console.log(error);
        return res.status(500).send({ error: error.message });
    }
};

const login = async (req, res) => {
    const { password, email } = req.body;

    try {
        const user = await userService.getUserByEmail(email);

        if (!user) {
            return res
                .status(404)
                .send({ message: "User is not found with email : ", email });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: "Invalid Password" });
        }

        const jwt = jwtProvider.generateToken(user._id);
        return res.status(200).send({ jwt, message: "Login Successfully" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};


module.exports = { register, login }