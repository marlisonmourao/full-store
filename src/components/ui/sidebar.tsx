'use client'

import { AvatarImage } from '@radix-ui/react-avatar'
import {
  Home,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  PercentIcon,
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Avatar, AvatarFallback } from './avatar'
import { Button } from './button'
import { Separator } from './separator'
import { SheetClose, SheetContent, SheetHeader } from './sheet'

function Sidebar() {
  const { status, data } = useSession()

  async function handleLoginClick() {
    await signIn()
  }

  async function handleLogout() {
    await signOut()
  }

  return (
    <SheetContent side="left">
      <SheetHeader className="text-left text-lg font-semibold">
        Menu
      </SheetHeader>

      {status === 'authenticated' && data?.user && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2 py-4">
            <Avatar>
              <AvatarFallback>{data.user?.name?.toUpperCase()}</AvatarFallback>

              {data.user.image && <AvatarImage src={data.user.image} />}
            </Avatar>
            <div className="flex flex-col">
              <p className="font-medium">{data.user.name}</p>

              <p className="text-sm opacity-75">Boas Compras</p>
            </div>
          </div>
          <Separator />
        </div>
      )}

      <div className="mt-2 mt-4 flex flex-col gap-2">
        {status === 'unauthenticated' && (
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={handleLoginClick}
          >
            <LogInIcon size={16} />
            Fazer Loggin
          </Button>
        )}

        {status === 'authenticated' && (
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={handleLogout}
          >
            <LogOutIcon size={16} />
            Fazer Loggout
          </Button>
        )}

        <Button variant="outline" className="w-full justify-start gap-2">
          <Home size={16} />
          Início
        </Button>

        <Button variant="outline" className="w-full justify-start gap-2">
          <PercentIcon size={16} />
          Ofertas
        </Button>

        <SheetClose asChild>
          <Link href={`/catalog`}>
            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>
          </Link>
        </SheetClose>
      </div>
    </SheetContent>
  )
}

export default Sidebar
