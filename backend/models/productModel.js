const mongoose = require ("mongoose");
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    currency: {
        type: String
    },
    images: [{
        url: {
            type: String,
        required: true
        },
        id: {
            type: String,
        required: true
        }
    }]
})

module.exports = mongoose.model("Product", productSchema)