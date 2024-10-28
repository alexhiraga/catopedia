import CatDetails from "./CatDetails";

export default function CatPage({ params }: {params: { id: string } }) {
  return <CatDetails id={params.id} />
}