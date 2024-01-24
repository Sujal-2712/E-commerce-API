const express = require('express');
const item = require('./../models/items')

const { handleGetAllItems, handleGetItemByID, handleCreateNewItem, handleUpdateItemByID, handleDeleteItemByID ,sayHello} 
= require("./../controller/");

const router = new express.Router();

router.get('/', sayHello);

router.get('/api/items', handleGetAllItems);

router.get('/api/items/:id', handleGetItemByID)

router.post('/api/items', handleCreateNewItem)

router.patch('/api/items/:id', handleUpdateItemByID);

router.delete('/api/items/:id', handleDeleteItemByID);

module.exports = router;