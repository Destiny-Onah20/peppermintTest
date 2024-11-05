import mongoose from "mongoose";
import { IProduct } from "../interfaces/product.interface";

const productSchema = new mongoose.Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
});

const Product = mongoose.model("products", productSchema);

export default Product;
