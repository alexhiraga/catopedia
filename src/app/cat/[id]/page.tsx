"use client"

import { Cat } from "@/app/types/Cat";
import { useEffect, useState } from "react";
import axios from '../../../api/axiosConfig'
import Image from "next/image";
import favicon from '../../favicon.ico'
import LineInfo from "@/app/components/cat/LineInfo";

interface CatIdProps {
  params: Params
}

interface Params {
  id: string
}

export default function CatPage({ params }: CatIdProps) {
  const [cat, setCat] = useState<Cat>()
  const { id } = params

  async function fetchCat(): Promise<void> {
    try {
      const catResponse = (await axios.get(`/images/${id}`)).data
      if(!catResponse) throw 'Not found'
      setCat(catResponse)
    } catch (error) {
      console.error('Error on searching the cat:', error)
    }
  }

  useEffect(() => {
    fetchCat()
  }, [])

  function handleConcatenateBreed(key: string, defaultValue?: string): string {
    return cat?.breeds?.length ? cat?.breeds.map(breed => breed[key]).join(' - ') : (defaultValue || '')
  }

  if(!cat) {
    return <div>Not found</div>
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="border-darkBackground dark:border-lightBackground border-[1px] flex">
        <div className="max-w-xl">
          <Image
            src={cat.url}
            alt={`Image ${cat.id}`}
            width={700}
            height={700}
            className="border-darkBackground dark:border-lightBackground md:border-r-[1px]"
          />
        </div>
        <div className="min-w-96 flex flex-col gap-2 relative">
          <div className="flex justify-start gap-3 p-3 items-center md:border-b-[1px] border-b-zinc-700 dark:border-zinc-300">
            <div className="relative bg-gray-800 rounded-full w-10 h-10 flex flex-col justify-center">
              <Image 
                className="rounded-full m-auto"
                src={favicon}
                alt="Logo"
                width={30}
                height={30}
                layout="intrinsic"
                objectFit="cover"
              />
            </div>
            <div>
              <h5 className="text-sm font-semibold">Catopedia</h5>
            </div>
          </div>
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

          <div className="absolute bottom-0 min-w-96">

          </div>
        </div>
      </div>
    </div>
  );
}