'use client'

import { useSearchParams } from "next/navigation";
import CatDetails from "./CatDetails";
import NotFound from "@/components/notfound/NotFound";
import { Suspense } from "react";

export default function CatPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  if(!id) return (
    <Suspense>
      <NotFound />
    </Suspense>
  )
  return (
    <Suspense>
      <CatDetails id={id} />
    </Suspense>
  ) 
}