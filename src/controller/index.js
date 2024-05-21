const express=require('express');
const item=require('./../models/items')


const addData = async (data) => {
    const user = await item.insertMany(data);
    return user;
}

async function handleGetAllItems(req, res) {
    try {
        const data = await item.find();

        // const count=await item.find().count();
        // console.log(count);
        res.send(data);

    } catch (error) {
        console.log(error);
    }
}

async function handleGetItemByID (req, res) {
    try {
        const product_id = req.params.id;
        console.log(product_id);
        // const user = await item.find({ product_id: product_id });
        const user=await item.find({_id:product_id});
        console.log(user);
        res.send(user);
    } catch (error) {
        console.log(error);
    }
}

async function handleCreateNewItem (req, res) {
    try {
        const data = req.body;
        const newItem = new item(data);
        // console.log(item);
        addData(newItem).then((result) => {
            console.log("data is added");
            res.send(result);
        }).catch((error) => {
            console.log(error);
        });

    } catch (error) {
        console.log(error);
    }
}

async function handleUpdateItemByID(req, res){

    try {
        const product_id = req.params.id;
        const updateData = req.body;

        const user = await item.findByIdAndUpdate(product_id, updateData);

        res.send(user);
    }
    catch (error) {
        console.log(error);
    }
}
async function handleDeleteItemByID (req,res){
    try {
        const product_id=req.params.id;
        const user=await item.findByIdAndDelete(product_id);
        res.send(user);

    } catch (error) {
        console.log(error);
    }
}
module.exports={handleGetAllItems,handleGetItemByID,handleCreateNewItem,handleUpdateItemByID,handleDeleteItemByID};
