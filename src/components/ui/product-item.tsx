import { ProductTotalPrice } from '@/helpers/product'
import { ArrowDownIcon } from 'lucide-react'
import Image from 'next/image'
import { Badge } from './badge'

interface ProductItemProps {
  product: ProductTotalPrice
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          alt={product.name}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: 'contain',
          }}
        />

        {product.discountPercent > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-2">
            <ArrowDownIcon size={14} /> {product.discountPercent}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className=" w-full overflow-hidden  text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercent > 0 ? (
            <>
              <p className="font-semibold">R${product.totalPrice.toFixed(2)}</p>

              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice.toFixed(2))}
              </p>
            </>
          ) : (
            <p className="font-semibold">
              R$ {Number(product.basePrice.toFixed(2))}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
export default ProductItem
