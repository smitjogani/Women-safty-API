const selfDefenceServices = require("../../services/selfDefence/selfDefence.services");

const createSelfDefencePost = async (req, res) => {
    try {
        const createPost = await selfDefenceServices.addSelfDefencePost(req.body);
        return res.status(200).send(createPost);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const getAllSelfDefencePost = async (req, res) => {
    try {
        const posts = await selfDefenceServices.getAllSelfDefencePost();
        return res.status(200).send(posts);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const findSelfDefencePostById = async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await selfDefenceServices.findPostById(postId);
        return res.status(200).send(post);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const deleteSelfDefencePost = async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await selfDefenceServices.deleteProduct(postId);
        return res.status(200).send(post);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

module.exports = {
    createSelfDefencePost,
    getAllSelfDefencePost,
    findSelfDefencePostById,
    deleteSelfDefencePost
}