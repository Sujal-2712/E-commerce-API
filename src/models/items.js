const mongoose=require('mongoose');

// const validator=require('validator');

const itemSchema=mongoose.Schema({
    product_id:{
        type:String,
    },
    product_name:{
        type:String,
    },
    category:{
        type:String,
    },
    discounted_price:{
        type:Number,
    },
    actual_price:{
        type:Number,
    },
    discount_percentage:{
        type:String,
    },
    rating:{
        type:Number,
    },
    rating_count:{
        type:Number,
    },
    about_product:{
        type:String,
    },
    product_link:{
        type:String,
    }
});

const item=mongoose.model("item",itemSchema);
module.exports=item;