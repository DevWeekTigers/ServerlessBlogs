const express = require('express');
const { createPost , retrievePosts, retrievePost, retrieveCategories} = require('../../controllers/posts/postCtrl');
const authMiddleware = require('../../middlewares/auth/authMiddleware');

const postRoute = express.Router()

postRoute.get('/', retrievePosts)
postRoute.get('/categories', retrieveCategories)

postRoute.use(authMiddleware)

postRoute.post('/', createPost)
postRoute.get('/:id', retrievePost)



module.exports = postRoute;