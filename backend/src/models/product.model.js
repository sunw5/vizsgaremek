const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    "Magyar név": {
        type: String,
        required: true,
    },    
    "Elérhető": {
        type: Boolean,
        required: true,
    },
    "Ár": {
        type: Number,
        required: true,
    },
    "Latin név": {
        type: String,
        required: false,
    },
    "Fényigény": {
        type: String,
        required: false,
    },
    "Tenyészidő": {
        type: String,
        required: false,
    },
    "Talajigény": {
        type: String,
        required: false,
    },
    "Habitus": {
        type: String,
        required: false,
    },
    "Teljes magasság": {
        type: String,
        required: false,
    },
    "Kiszerelés": {
        type: String,
        required: false,
    },
    "Virágzás ideje": {
        type: String,
        required: false,
    },
    "Virág színe": {
        type: String,
        required: false,
    },
    "Egyéb": {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('Product', ProductSchema);
