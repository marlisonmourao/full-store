import { prisma } from '@/lib/prisma'
import Categories from './components/categories'
import ProductList from './components/product-list'
import PromoBanner from './components/promo-banner'
import { SectionTitle } from './components/section-title'

export default async function Home() {
  const deals = await prisma.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  })

  const keyboards = await prisma.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
  })

  const mouses = await prisma.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    },
  })

  return (
    <div className="flex flex-col gap-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="até 55% de descontos esse mês"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="até 55% de descontos em mouses"
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>

        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="até 55% de descontos em mouses"
      />

      <div>
        <SectionTitle>Mouses</SectionTitle>

        <ProductList products={mouses} />
      </div>
    </div>
  )
}
