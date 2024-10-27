import CatDetails from "./CatDetails";

export async function generateStaticParams() {
  console.log("entrou generateStaticarams")
  return [{ id: '1' }]
}  

export default function CatPage() {
  console.log("entrou catPage")
  return <CatDetails />
 
}