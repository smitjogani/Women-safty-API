const user = require("../../models/User/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../../../config/jwtProvider");

const createUser = async (userData) => {
    try {
        let { firstName, lastName, imageUrl, password, email, mobileno, address, bloodgroup, emergencyContacts } = userData;
        const isUserExists = await user.findOne({ email });

        if (isUserExists) {
            throw new Error("User already exists with email ", email);
        }

        password = await bcrypt.hash(password, 8);

        const userCreate = await user.create({
            firstName,
            lastName,
            imageUrl,
            password,
            email,
            mobileno,
            address,
            bloodgroup,
            emergencyContacts
        });

        return userCreate;

    } catch (error) {
        throw new Error(error.message);
    }
}

const findUserById = async (userId) => {
    try {
        const userResult = await user.findById(userId);

        if (!userResult) {
            throw new Error("User not found with this id : ", userId);
        }

        return userResult;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token);

        const user = await findUserById(userId);

        if (!user) {
            throw new Error("User not found with this id : ", userId);
        }

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserByEmail = async (email) => {
    try {
        const userResult = await user.findOne({ email });

        if (!userResult) {
            throw new Error("User not found with this email : ", email);
        }

        return userResult;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllTheUser = async () => {
    try {
        const users = await user.find();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createUser,
    findUserById,
    getUserProfileByToken,
    getUserByEmail,
    getAllTheUser
}