import { Badge } from '@/components/ui/badge'
import ProductItem from '@/components/ui/product-item'
import { CATEGORY_ICON } from '@/constants/category-icon'
import { computeProductTotalPrice } from '@/helpers/product'
import { prisma } from '@/lib/prisma'

interface CategoryProductProps {
  params: {
    slug: string
  }
}

const CategoryProduct = async ({ params }: CategoryProductProps) => {
  const category = await prisma.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  })

  if (!category) {
    return null
  }

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category?.name}
      </Badge>

      <div className="ap-8 grid grid-cols-2 gap-4">
        {category.products.map((category) => (
          <ProductItem
            key={category.id}
            product={computeProductTotalPrice(category)}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryProduct
