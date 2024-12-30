const medicare = require("../../models/medicare/medicare.model");

const addmedicarePost = async (data) => {
    try {
        let { injuryType, descInjury, severity, medicationsOne, firstAidActions } = data;

        const postCreate = await medicare.create({
            injuryType,
            descInjury,
            severity,
            medicationsOne,
            firstAidActions
        });

        return postCreate;

    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllmedicarePost = async () => {
    try {
        const posts = await medicare.find();
        return posts;
    } catch (error) {
        throw new Error(error.message);
    }
}

const deleteMedicarePost = async (id) => {
    try {
        const post = await medicare.findByIdAndDelete(id);

        if (!post) {
            throw new Error("Post deletation is failed");
        }

        return "Delete Successfully";

    } catch (error) {
        throw new Error(error.message);
    }
}

const findMedicarePostById = async (id) => {
    const post = await medicare.findById(id);

    if (!post) {
        throw new Error("Product Not Found With id : ", id);
    }

    return post;
}

module.exports = {
    addmedicarePost,
    getAllmedicarePost,
    deleteMedicarePost,
    findMedicarePostById
}