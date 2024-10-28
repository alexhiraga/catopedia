"use client"

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from '../../api/axiosConfig'
import { Favourite } from "../types/Favourite";
import { useUserModal } from "./modal/UserModalContext";
import { useNotification } from "./NotificationContext";
import { NotificationTypesEnum } from "../enums/NotificationTypesEnum";
import { FavouriteDTO } from "../types/FavouriteDTO";
import { usePathname } from "next/navigation";

interface FavouriteContextType {
  favourites: Favourite[]
  addFavourite: (favouriteDTO: FavouriteDTO) => Promise<void>
  removeFavourite: (id: number) => Promise<boolean>
  loading: boolean
}

const defaultFavouriteContextValue: FavouriteContextType = {
  favourites: [],
  addFavourite: async() => {},
  removeFavourite: async() => false,
  loading: false,
}

interface FavouriteProviderProps {
  children: React.ReactNode
}

const FavouriteContext = createContext<FavouriteContextType>(defaultFavouriteContextValue)

export const useFavouriteContext = () => {
  return useContext(FavouriteContext)
}

export default function FavouriteProvider({ children }: FavouriteProviderProps) {
  const [favourites, setFavourites] = useState<Favourite[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const { user } = useUserModal()
  const { showNotification } = useNotification()
  const pathname = usePathname()
  const { openModal } = useUserModal()

  const fetchFavourites = async(): Promise<void> => {
    try {
      setLoading(true)
      const favouritesResponse = (await axios.get('/favourites')).data
      if(favouritesResponse) {
        setFavourites(favouritesResponse)
      } else {
        showNotification(NotificationTypesEnum.WARNING, 'No favourite found')
      }
    } catch (error) {
      showNotification(NotificationTypesEnum.DANGER, 'Error on searching favourites')
      console.error('Error on searching favourites:', error)
    } finally {
      setLoading(false)
    }
  }

  const addFavourite = async (favourite: FavouriteDTO): Promise<void> => {
    if(!user) {
      openModal()
      return showNotification(NotificationTypesEnum.DANGER, 'It is necessary to set your cat name to favourite an image.')
    }

    try {
      const body = {
        image_id: favourite.image_id,
        sub_id: user,
      }
      const response = (await axios.post('/favourites', body)).data
      if(response.message === 'SUCCESS') {
        showNotification(NotificationTypesEnum.SUCCESS, 'Image successfully favorited!')
      }
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const errorMessage = error?.response?.data
      if(errorMessage && errorMessage.startsWith('DUPLICATE_FAVOURITE')) {
        showNotification(NotificationTypesEnum.WARNING, 'Image is already favorited!')
        console.error('Image is already favorited!', error)
      } else {
        showNotification(NotificationTypesEnum.DANGER, 'Error on saving new favourite image')
        console.error('Error on saving new favourite image:', error)
      }
    }
  }

  const removeFavourite = async (id: number): Promise<boolean> => {
    try {
      const response = (await axios.delete(`/favourites/${id}`)).data
      if(response?.message && response.message === 'SUCCESS') {
        showNotification(NotificationTypesEnum.SUCCESS, 'Image deleted successfully!')
        return true
      }
      else return false
    } catch (error) {
      showNotification(NotificationTypesEnum.DANGER, 'Error on deleting image')
      console.error('Error on deleting image:', error)
      return false
    }
  }

  useEffect(() => {
    if(pathname === '/favourites') fetchFavourites()
  }, [pathname])

  return (
    <FavouriteContext.Provider value={{ favourites, addFavourite, removeFavourite, loading }}>
      {children}
    </FavouriteContext.Provider>
  )
}