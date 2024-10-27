import CatDetails from "./CatDetails";

export async function generateStaticParams() {
  console.log("entrou generateStaticarams")
  return [{ id: '1' }]
}  

type CatPageProps = Promise<{
  id: string
}>

export default async function CatPage(props : { params: CatPageProps }) {
  console.log("entrou catPage")
  if((await props.params).id === '1') return
  return <CatDetails />
 
}