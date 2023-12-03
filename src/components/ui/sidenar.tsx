import { Home, ListOrderedIcon, LogInIcon, PercentIcon } from 'lucide-react'
import { Button } from './button'
import { SheetContent, SheetHeader } from './sheet'

function Sidebar() {
  return (
    <SheetContent side="left">
      <SheetHeader className="text-left text-lg font-semibold">
        Menu
      </SheetHeader>

      <div className="mt-2 flex flex-col gap-2">
        <Button variant="outline" className="w-full justify-start gap-2">
          <LogInIcon size={16} />
          Fazer Loggin
        </Button>

        <Button variant="outline" className="w-full justify-start gap-2">
          <Home size={16} />
          Início
        </Button>

        <Button variant="outline" className="w-full justify-start gap-2">
          <PercentIcon size={16} />
          Ofertas
        </Button>

        <Button variant="outline" className="w-full justify-start gap-2">
          <ListOrderedIcon size={16} />
          Ofertas
        </Button>
      </div>
    </SheetContent>
  )
}

export default Sidebar
