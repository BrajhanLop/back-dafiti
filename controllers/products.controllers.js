import { Product } from "../models/producto.model.js";

export const getProductsAll = async (req, res) => {
  try {
      const products = await Product.find().populate('category');


    res.status(201).json({
      status: true,
      msg: products,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      brand,
      discount,
      originalPrice,
      sizes,
      colors,
      category,
      stock,
      offer,      
      images
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      brand,
      discount,
      originalPrice,
      sizes,
      colors,
      category,
      stock,
      offer,      
      images
    });

    const newProduct = await product.save();

    res.status(201).json({
      status: true,
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOfferts = async(req, res) => {
  try {
    const products = await Product.find({ offer: true });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos en oferta' });
  }
}