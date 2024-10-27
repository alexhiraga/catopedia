import CatDetails from "./CatDetails";

export async function generateStaticParams() {
  return [{ id: '1' }]
}  

export default function CatPage() {

  return <CatDetails />
 
}