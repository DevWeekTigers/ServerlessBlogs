const express = require('express');
const { createPost , retrievePosts, retrievePost} = require('../../controllers/posts/postCtrl');

const postRoute = express.Router()


postRoute.post('/', createPost)

postRoute.get('/', retrievePosts)

postRoute.get('/:id', retrievePost)

module.exports = postRoute;