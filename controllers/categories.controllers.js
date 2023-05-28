import { Category, Subcategory } from "../models/category.models.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("subcategories");
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

export const createcategory = async (req, res) => {
  const { name, subcategories } = req.body;
  try {
    const newCategory = await Category.create({ name, subcategories });

    res.status(201).json({
      status: true,
      data: newCategory,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSubCategories = async(req, res) => {
  try {
    const subcategories = await Subcategory.find();
    res.json(subcategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const createSubCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { name, subcategories } = req.body;

  try {
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }

    const subcategory = new Subcategory({
      name,
      subcategories,
    });

    await subcategory.save();
    category.subcategories.push(subcategory);
    await category.save();

    res.status(201).json({
      status: true,
      data: category,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const resCategory = await Category.findById(id);

    res.status(201).json({
      status: true,
      data: resCategory,
    });
  } catch (error) {
    console.log(error);
  }
};
