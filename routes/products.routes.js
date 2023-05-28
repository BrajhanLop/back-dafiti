import { Router } from 'express'
import { createProduct, getOfferts, getProductsAll } from '../controllers/products.controllers.js'

export const productRouter = Router()

productRouter.get('/all', getProductsAll)
productRouter.post('/create', createProduct)
productRouter.get('/offers', getOfferts)