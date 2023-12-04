'use client'

import { useSession } from 'next-auth/react'

export default function Home() {
  const { data } = useSession()

  return <h1 className="text-xl text-zinc-600">{data?.user?.name}</h1>
}
