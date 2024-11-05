'use client'

import { useSearchParams } from "next/navigation";
import CatDetails from "./CatDetails";
import NotFound from "@/components/notfound/NotFound";
import { Suspense } from "react";

export default function CatPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  if (!id) {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <NotFound />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CatDetails id={id} />
    </Suspense>
  )
}