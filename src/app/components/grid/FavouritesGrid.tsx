'use client';
import { useFavouriteContext } from "@/app/context/FavouriteContext";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import { Cat } from "@/app/types/Cat";

export default function FavouritesGrid() {
  const { favourites } = useFavouriteContext()
  const [images, setImages] = useState<Cat[]>([])

  useEffect(() => {
    if(!favourites) return
    const extractedImages = favourites.map(favourite => {
      return {
        ...favourite.image,
        favourite_id: favourite.id
      }
    }) as Cat[]
    setImages(extractedImages)
  }, [favourites])

  
  return <Grid images={images} isFavourite={true} />
}