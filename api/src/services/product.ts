import { NotFoundError } from '../helpers/apiError'
import Product, { ProductDocument } from '../models/Product'

const createProduct = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  const newProduct = await product.save()
  return newProduct
}

const findProductById = async (productId: string): Promise<ProductDocument> => {
  const foundProduct = await Product.findById(productId)
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }
  return foundProduct
}

const findAllProducts = async (): Promise<ProductDocument[]> => {
  const foundProducts = await Product.find()
  if (!foundProducts) {
    throw new NotFoundError('No products')
  }
  return foundProducts
}

const updateProduct = async (
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument> => {
  const foundProduct = await Product.findByIdAndUpdate(productId, update, {
    new: true,
  })
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }
  return foundProduct
}

const deleteProduct = async (productId: string): Promise<ProductDocument> => {
  const foundProduct = await Product.findByIdAndDelete(productId)
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }
  return foundProduct
}

export default {
  createProduct,
  findProductById,
  findAllProducts,
  updateProduct,
  deleteProduct,
}
