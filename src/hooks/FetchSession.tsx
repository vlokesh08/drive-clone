import React from 'react'
import { useSession } from "next-auth/react"


export default function FetchSession() {
  const { data: session } = useSession()

  return ( session )
}
