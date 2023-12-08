import { Badge } from '@/components/ui/badge'
import { prisma } from '@/lib/prisma'
import { ShapesIcon } from 'lucide-react'
import CatalogItem from './components/catalog-item'

const CatalogPage = async () => {
  const category = await prisma.category.findMany()

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 flex-wrap gap-8">
        {category.map((item) => (
          <CatalogItem key={item.id} category={item} />
        ))}
      </div>
    </div>
  )
}

export default CatalogPage
