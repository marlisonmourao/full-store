import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from './button'
import { Card } from './card'
import { Sheet, SheetTrigger } from './sheet'
import Sidebar from './sidebar'

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <Sidebar />
      </Sheet>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">FSW</span> Store
        </h1>
      </Link>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  )
}

export default Header
