import CatDetails from "./CatDetails";

export async function generateStaticParams() {
  console.log("entrou generateStaticarams")
  return [{ id: '1' }]
}  


interface CatPageProps {
  params: {
    id: string
  }
}

export default async function CatPage({ params }: CatPageProps) {
  console.log("entrou catPage")
  if(params.id === '1') return
  return <CatDetails />
 
}