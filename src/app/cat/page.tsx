'use client'

import { useSearchParams } from "next/navigation";
import CatDetails from "./CatDetails";
import NotFound from "@/components/notfound/NotFound";

export default function CatPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  if(!id) return <NotFound />
  return <CatDetails id={id} />;
}