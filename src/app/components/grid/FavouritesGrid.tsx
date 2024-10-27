'use client';
import { useFavouriteContext } from "@/app/context/FavouriteContext";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import { Cat } from "@/app/types/Cat";
import { useUserModal } from "@/app/context/modal/UserModalContext";

interface FavouritesGridProps {
  showMyFavourites: boolean
}

export default function FavouritesGrid({ showMyFavourites }: FavouritesGridProps) {
  const { favourites } = useFavouriteContext()
  const [images, setImages] = useState<Cat[]>([])
  const { user } = useUserModal()

  useEffect(() => {
    if(!favourites) return
    const extractedImages = setAllFavourites()
    filterMyFavourites()
    setImages(extractedImages)
  }, [favourites])

  function setAllFavourites(): Cat[] {
    return favourites.map(favourite => {
      return {
        ...favourite.image,
        favourite_id: favourite.id,
        sub_id: favourite.sub_id,
      }
    }) as Cat[]
  }

  function filterMyFavourites(): void {
    if(showMyFavourites && user) {
      const filteredFavourites = setAllFavourites().filter(image => image.sub_id === user)
      setImages(filteredFavourites)
    } else {
      setImages(setAllFavourites())
    }
  }

  useEffect(() =>{
    filterMyFavourites()
  }, [showMyFavourites, favourites])
  
  return <Grid images={images} isFavourite={true} />
}