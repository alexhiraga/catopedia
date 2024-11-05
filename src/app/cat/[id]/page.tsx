'use client'

import CatDetails from "./CatDetails";
import NotFound from "@/components/notfound/NotFound";
import { useParams } from "next/navigation";
import { Suspense } from "react";

export default function CatPage() {
  const params = useParams()
  const id = Array.isArray(params.id) ? params.id[0] : params.id

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {id ? <CatDetails id={id} /> : <NotFound />}
    </Suspense>
  );
}