import { Product } from '@prisma/client'

export interface ProductTotalPrice extends Product {
  totalPrice: number
}

export function computeProductTotalPrice(product: Product): ProductTotalPrice {
  if (product.discountPercent === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    }
  }

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercent / 100)

  return {
    ...product,
    totalPrice: Number(product.basePrice) - totalDiscount,
  }
}
