const selfDefence = require("../../models/selfdefence/selfdefence.model");

const addSelfDefencePost = async (data) => {
    try {
        let {techniqueName, category, description, videoLink} = data;

        const postCreate = await selfDefence.create({
            techniqueName,
            category, 
            description, 
            videoLink
        });

        return postCreate;

    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllSelfDefencePost = async() => {
    try {
        const posts = await selfDefence.find();
        return posts;
    } catch (error) {
        throw new Error(error.message);
    }
}

const deleteProduct = async(id) => {
    try {
        const post = await selfDefence.findByIdAndDelete(id);

        if(!post)
        {
            throw new Error("Post deletation is failed");
        }

        return "Delete Successfully";

    } catch (error) {
        throw new Error(error.message);
    }
}

const findPostById = async(id) => {
    const post = await selfDefence.findById(id);

    if (!post) {
        throw new Error("Product Not Found With id : ", id);
      }
    
      return post;
}

module.exports = {
    addSelfDefencePost,
    getAllSelfDefencePost,
    deleteProduct,
    findPostById
}