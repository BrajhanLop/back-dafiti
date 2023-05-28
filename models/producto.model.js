import { Schema, model } from "mongoose";

const productoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  originalPrice: {
    type: Number,
  },
  sizes: [
    {
      type: String,
    },
  ],
  colors: [
    {
      type: String,
    },
  ],
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  stock: {
    type: Number,
    default: 0,
  },
  offer: {
    type: Boolean,
    default: false,
  },
  originalPrice: {
    type: Number,
  },
  images: [
    {
      type: String,
    },
  ],
});

export const Product = model("Product", productoSchema);
