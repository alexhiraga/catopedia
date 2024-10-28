"use client"

import { Cat } from "@/app/types/Cat";
import { use, useEffect, useState } from "react";
import axios from '../../../api/axiosConfig'
import Image from "next/image";
import favicon from '../../favicon.ico'
import LineInfo from "@/app/components/cat/LineInfo";
import ActionsBar from "./ActionsBar";
import Loading from "@/app/components/loading/Loading";
import NotFound from "@/app/components/notfound/NotFound";
import CatStats from "./CatStats";
import LinkIcon from '@mui/icons-material/Link';
import Link from "next/link";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';

type CatDetailsProps = { id: string };

export default function CatDetails({ id }: CatDetailsProps) {
  const [cat, setCat] = useState<Cat>()
  const [loading, setLoading] = useState<boolean>(false)

  async function fetchCat(id: string): Promise<void> {
    try {
      setLoading(true)
      const catResponse = (await axios.get(`/images/${id}`)).data
      if(!catResponse) throw 'Not found'
      setCat(catResponse)
    } catch (error) {
      console.error('Error on searching the cat:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(id) {
      fetchCat(id)
    }
  }, [id])

  function handleConcatenateBreed(key: string, defaultValue?: string): string {
    return cat?.breeds?.length ? cat?.breeds.map(breed => breed[key]).join(' - ') : (defaultValue || '')
  }

  if(loading) {
    return <Loading />
  }

  if(!cat && !loading) {
    return <NotFound />
  }

  if(cat) return (
    <div className=" md:w-auto min-h-screen pt-0 md:pt-20">
      <div className="border-darkBackground dark:border-lightBackground border-[1px] flex flex-col md:flex-row">
        <div className="w-screen md:w-auto md:max-w-xl">
          <div className="flex justify-start gap-3 p-3 items-center md:border-b-[1px] border-b-zinc-700 dark:border-zinc-300 md:hidden">
            <div className="relative bg-gray-800 rounded-full w-10 h-10 flex flex-col justify-center">
              <Image 
                className="rounded-full m-auto"
                src={favicon}
                alt="Logo"
                width={30}
                height={30}
                layout="intrinsic"
              />
            </div>
            <div>
              <h5 className="text-sm font-semibold">Catopedia</h5>
            </div>
          </div>
          <Image
            src={cat.url}
            alt={`Image ${cat.id}`}
            width={768}
            height={768}
            className="border-darkBackground dark:border-lightBackground "
          />
        </div>
        <div className="w-96 flex flex-col gap-2 relative md:border-l-[1px] md:justify-between">
          <div>
            <div className="md:flex justify-start gap-3 p-3 items-center md:border-b-[1px] border-b-zinc-700 dark:border-zinc-300 hidden">
              <div className="relative bg-gray-800 rounded-full w-10 h-10 flex flex-col justify-center">
                <Image 
                  className="rounded-full m-auto"
                  src={favicon}
                  alt="Logo"
                  width={30}
                  height={30}
                  layout="intrinsic"
                />
              </div>
              <div>
                <h5 className="text-sm font-semibold">Catopedia</h5>
              </div>
            </div>
            <div className="md:hidden p-4 md:border-b-[1px] border-b-zinc-700 dark:border-zinc-300 ">
              <ActionsBar cat={cat} />
            </div>
            <div className="py-3 flex flex-col gap-2">
              <LineInfo 
                label="Name"
                description={handleConcatenateBreed('name', 'Cat')}
              />
              <LineInfo
                label="Temperament"
                description={handleConcatenateBreed('temperament')}
              />
              <LineInfo
                label="Origin"
                description={handleConcatenateBreed('origin')}
              />
              <LineInfo
                label="Description"
                description={handleConcatenateBreed('description')}
              />
              <LineInfo
                label="Life Span"
                description={handleConcatenateBreed('life_span')}
              />
            </div>
          </div>

          <div className="min-w-96 p-4 md:border-t-[1px] border-t-zinc-700 dark:border-zinc-300 hidden md:block">
            <ActionsBar cat={cat} />
          </div>
        </div>
      </div>

      <div className="my-20">
        {cat.breeds && cat.breeds.length && cat.breeds.map(breed =>  (
          <div key={breed.id}>
            <CatStats breed={breed} />
            <div className="flex flex-row gap-4 justify-center mt-10">
              <div className="text-xs hover:brightness-200 transition-all">
                <Link href={breed.wikipedia_url} className="flex flex-row gap-1 items-center">
                  <LinkIcon />
                  Wikipedia
                </Link>
              </div>
              <div className="text-xs hover:brightness-200 transition-all">
                <Link href={breed.vcahospitals_url} className="flex flex-row gap-1 items-center">
                  <LocalHospitalIcon />
                  VCA Hospital
                </Link>
              </div>
              <div className="text-xs hover:brightness-200 transition-all">
                <Link href={breed.vetstreet_url} className="flex flex-row gap-1 items-center">
                  <PetsIcon />
                  Vet Street
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}