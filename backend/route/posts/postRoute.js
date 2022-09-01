const express = require('express');
const { createPost , retrievePosts, retrievePost, retrieveCategories} = require('../../controllers/posts/postCtrl');
const authMiddleware = require('../../middlewares/auth/authMiddleware');

const postRoute = express.Router()


postRoute.post('/', authMiddleware,createPost)

postRoute.get('/', retrievePosts)
postRoute.get('/categories', retrieveCategories)

postRoute.get('/:id', authMiddleware, retrievePost)



module.exports = postRoute;