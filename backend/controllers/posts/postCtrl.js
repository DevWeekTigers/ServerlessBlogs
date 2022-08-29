const Post = require("../../model/post/Post");


//-----------------------------------------------------
// Create a new Post 
//-----------------------------------------------------

const createPost = async (req, res, next) => { 

    try {
        const post = await Post.create({
            title: req?.body?.title,
            description: req?.body?.description,
            category: req?.body?.category,
            user: req?.body?.user
        })


        res.json(post);
    }
    catch (error) {
        res.json(error.message);
    }

}


//-----------------------------------------------------
// retrieve the posts
//-----------------------------------------------------

const retrievePosts = async (req, res) => {
    try {

        const posts = await Post.find({}).populate("user");

        res.json(posts); 
    }
    catch (error) {


        
    }
}


//-----------------------------------------------------
// retrieve the post
//-----------------------------------------------------

const retrievePost = async (req, res) => {
    try {

        const {id} = req.params;
        const post = await Post.findById(id).populate("user");
        res.json(post);
    }
    catch (error) 
    {
      
    }
}


module.exports = { createPost,retrievePosts, retrievePost} ;