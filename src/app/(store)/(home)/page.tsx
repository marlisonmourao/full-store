import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import Categories from './components/categories'
import ProductList from './components/product-list'

export default async function Home() {
  const deals = await prisma.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  })

  return (
    <div className="">
      <Image
        src="/banner-home-01.png"
        alt="até 55% de descontos esse mês"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="mb-2 pl-5 font-bold font-semibold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-home-02.png"
        alt="até 55% de descontos em mouses"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
      />
    </div>
  )
}
