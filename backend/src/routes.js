const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload.js');
const PostController = require('./controllers/PostController.js');
const LikeController = require('./controllers/LikeController.js');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

// http://localhost:3333/posts

module.exports = routes;

// o multipart form-data é usado para fazer requisições de envio para arquivos físicos
//  pode ser usado via postman