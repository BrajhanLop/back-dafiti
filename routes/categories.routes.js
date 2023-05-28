import { Router } from 'express'
import { createSubCategory, createcategory, getCategories, getCategoryById, getSubCategories } from '../controllers/categories.controllers.js'

export const categoryRouter = Router()

categoryRouter.get('/', getCategories)
categoryRouter.get('/subCategories', getSubCategories)
categoryRouter.get('/:id', getCategoryById)
categoryRouter.post('/create', createcategory)
categoryRouter.post('/:categoryId/subcategories', createSubCategory)
