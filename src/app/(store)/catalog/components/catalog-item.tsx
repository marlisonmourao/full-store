import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

interface CatalogItemProps {
  category: Category
}

const CatalogItem = ({ category }: CatalogItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center rounded-tl-lg">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={300}
            height={300}
            sizes="100vw"
            className="h-auto max-h-[70%] max-w-[80%]"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className="flex items-center justify-center rounded-bl-lg rounded-br-lg bg-accent py-3">
          <p className="text-sm font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  )
}

export default CatalogItem
