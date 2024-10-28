import CatDetails from "./CatDetails";

export default async function CatPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <CatDetails id={resolvedParams.id} />;
}