'use client';

import Image from "next/image"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import { useFavouriteContext } from "@/context/FavouriteContext";
import { Cat } from "@/types/Cat";

interface GridProps {
  images: Cat[]
  isFavourite?: boolean
}

export default function Grid({ images, isFavourite }: GridProps) {
  const [gridImages, setGridImages] = useState<Cat[]>([])
  const [hover, setHover] = useState<boolean>(false)
  const { addFavourite, removeFavourite } = useFavouriteContext()

  useEffect(() => {
    setGridImages(images)
  }, [images])

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {gridImages.map(image => {
          async function handleToggleFavourite(): Promise<void> {
            if(isFavourite) {
              if(image.favourite_id) {
                const isDeleted = await removeFavourite(image.favourite_id)
                if(isDeleted) {
                  const updatedImages = images.filter(_image => _image.id !== image.id)
                  setGridImages(updatedImages)
                }
              }
            } else {
              addFavourite({image_id: image.id})
            }
          }
          
          return (
            <div key={image.id} className="relative">
              <Image
                src={image.url}
                alt={`Image ${image.id}`}
                width={400}
                height={400}
                className="aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
              <div className="absolute inset-0 flex items-center gap-2 justify-center opacity-0 group hover:opacity-100 transition-opacity ease-in-out duration-400">
                <Link href={`/cat/${image.id}`}>
                  <Tooltip title="Open image">
                    <OpenInNewIcon className="text-darkText" />
                  </Tooltip>
                </Link>
                { isFavourite ? (
                  <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    {hover ? (
                      <Tooltip title='Unfavorite image'>
                        <FavoriteBorderIcon className=" cursor-pointer text-darkText" onClick={handleToggleFavourite} />
                      </Tooltip>
                    ) : (
                      <FavoriteIcon className="text-red-500" />
                    )}
                  </div>
                ) : (
                  <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    {hover ? (
                      <Tooltip title='Favorite image'>
                        <FavoriteIcon className="text-red-500 cursor-pointer" onClick={handleToggleFavourite} />
                      </Tooltip>
                    ) : (
                      <FavoriteBorderIcon className="text-darkText" />
                    )}
                  </div>
                )}
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