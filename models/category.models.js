import { Schema, model} from 'mongoose'

const subcategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  subcategories: [{ type: Schema.Types.ObjectId, ref: 'Subcategory' }]  // Referencia a sí mismo para subcategorías anidadas
});

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  subcategories: [{ type: Schema.Types.ObjectId, ref: 'Subcategory' }]
});

export const Category = model('Category', categorySchema)
export const Subcategory = model('Subcategory', subcategorySchema)
