const medicareServices = require("../../services/Medicare/mediCare.services");

const createMedicarePost = async (req, res) => {
    try {
        const createPost = await medicareServices.addmedicarePost(req.body);
        return res.status(200).send(createPost);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const getAllMedicarePost = async (req, res) => {
    try {
        const posts = await medicareServices.getAllmedicarePost();
        return res.status(200).send(posts);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const findMedicarePostById = async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await medicareServices.findMedicarePostById(postId);
        return res.status(200).send(post);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const deleteMedicarePost = async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await medicareServices.deleteMedicarePost(postId);
        return res.status(200).send(post);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

module.exports = {
    createMedicarePost,
    getAllMedicarePost,
    findMedicarePostById,
    deleteMedicarePost
}