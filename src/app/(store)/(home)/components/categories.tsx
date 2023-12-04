import { prisma } from '@/lib/prisma'
import CategoryItem from './category-item'

const Categories = async () => {
  const categories = await prisma.category.findMany()

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((item) => (
        <CategoryItem key={item.id} category={item} />
      ))}
    </div>
  )
}

export default Categories
