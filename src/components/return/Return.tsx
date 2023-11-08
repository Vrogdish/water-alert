"use client"
import React, { ReactNode } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Props {
    children : ReactNode
    redirection : string
}

export default function Return({children, redirection}:Props) {
    const router = useRouter()


  return (
    <Link href={redirection} className="flex gap-4 px-10 py-6 md:py-20 items-center cursor-pointer" >
    <Image src={"/images/arrow.png"} alt="retour" width={30} height={30} className="rotate-180"/>
    {children}
  </Link>
  )
}
