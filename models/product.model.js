const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, "Please enter product name"]
        // The user must provide a name for the product)
    },

    quantity: {
        type: Number,
        required: true,
        default: 0 //If no value is provided for quantity, it defaults to 0.
    },

    price: {
        type: Number,
        required: true,
        default: 0
        
    },
    image: {
        type: String,
        required: false, //The image field is optional and can be omitted
    
    },
},
    {
        timestamps: true
        // timestamps are enabled. It is used to store the created and updated time of the product.
        //automatically adds two fields: createdAt and updatedAt to the schema
    }
);

const Product = mongoose.model('Product', ProductSchema);
// Product is the model name. It is used to perform CRUD operations on the product collection.  model represents a collection in the MongoDB database (in this case, it will be called products, as Mongoose pluralizes the model name by default).
// The Product model allows you to interact with the products collection (e.g., to create, read, update, or delete product documents).

module.exports = Product;