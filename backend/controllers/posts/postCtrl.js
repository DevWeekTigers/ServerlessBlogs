const Post = require('../../model/post/Post');

//-----------------------------------------------------
// Create a new Post
//-----------------------------------------------------

const createPost = async (req, res, next) => {
  console.log('req.body :>> ', req.body);
  try {
    const { title, description, category, user } = req?.body;
    const post = await Post.create({
      title,
      description,
      category,
      user,
    });
    console.log('res.json(post) :>> ');
    res.json(post);
  } catch (error) {
    res.json(error.message);
  }
};

//-----------------------------------------------------
// retrieve the posts
//-----------------------------------------------------

const retrievePosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate('user');

    res.json(posts);
  } catch (error) {}
};

const retrieveCategories = async (req, res) => {
  try {
    const categories = await Post.distinct('category');
    res.json(categories);
  } catch (error) {}
};

//-----------------------------------------------------
// retrieve the post
//-----------------------------------------------------

const retrievePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate('user');
    res.json(post);
  } catch (error) {}
};

module.exports = {
  createPost,
  retrievePosts,
  retrievePost,
  retrieveCategories,
};
