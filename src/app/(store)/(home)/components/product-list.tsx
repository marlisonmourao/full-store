import ProductItem from '@/components/ui/product-item'
import { computeProductTotalPrice } from '@/helpers/product'
import { Product } from '@prisma/client'

interface ProductListProps {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((item) => (
        <div className="w-[170px]  max-w-[170px]" key={item.id}>
          <ProductItem product={computeProductTotalPrice(item)} />
        </div>
      ))}
    </div>
  )
}

export default ProductList
