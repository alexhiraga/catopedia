import CatDetails from "./CatDetails";

export async function generateStaticParams() {
  return [{id: '1'}]
}

export default async function CatPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <CatDetails id={resolvedParams.id} />;
}