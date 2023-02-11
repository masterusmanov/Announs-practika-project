const express = require('express');
const announsController = require('../controller/announs.controller')
const multer = require('multer');
const path = require('path');

let route = express.Router();

let upload=multer()

route 
    .get('/announs', announsController.GET)
    .post('/create_announ', upload.single('file'), announsController.POST)
    .put('/update_announ/:id', announsController.PUT)
    .get('/delete_announ/:id', announsController.DELETE)
    .get('/create_unnoun/:id', announsController.MAIN_POST)
    .get('/main_announs', announsController.MAIN_GET)
    .get('/read_unnoun/:id', announsController.MAIN_GET_ID)
    .get('/read_filter_unnoun', announsController.WEB_GET_ID)
    .get('/read_mobil_unnoun', announsController.MOBIL_GET_ID)
    .get('/read_ai_unnoun', announsController.AI_GET_ID)
    .get('/read_kiber_unnoun', announsController.KIBER_GET_ID)
    .get('/read_online_unnoun', announsController.ONLINE_GET_ID)
    .get('/read_offline_unnoun', announsController.OFFLINE_GET_ID)
    .get('/read_imya_unnoun', announsController.IMYA_GET_ID)

module.exports = route