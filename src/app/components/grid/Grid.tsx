'use client';

import { useImagesContext } from "@/app/context/ImagesContext"
import Image from "next/image"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from "next/link";

export default function Grid() {
  const { images } = useImagesContext()

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {images.map(image => {
          return (
            <div key={image.id} className="relative">
              <Image
                src={image.url}
                alt={`Image ${image.id}`}
                objectFit="cover"
                width={400}
                height={400}
                className="aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
              <div className="absolute inset-0 flex items-center gap-2 justify-center opacity-0 group hover:opacity-100 transition-opacity ease-in-out duration-400">
                <Link href={`/cat/${image.id}`}>
                  <OpenInNewIcon />
                </Link>
                <FavoriteBorderIcon />
              </div>
              <div className="absolute bottom-2 left-2 text-white p-2">
                <p>{image.breeds?.length ? image.breeds.map(breed => breed.name).join(' - ') : 'Cat'}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}