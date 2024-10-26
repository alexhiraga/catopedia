"use client"

import React, { createContext, useContext, useState } from "react";
import axios from '../../api/axiosConfig'

interface FavouriteContextType {
  user: string
  setUser: (subId: string) => void
  favourites: any[] // tipar
  setFavourites: (imageId: string) => void
}

const defaultFavouriteContextValue: FavouriteContextType = {
  user: '',
  setUser: () => {},
  favourites: [],
  setFavourites: () => {},
}

interface FavouriteProviderProps {
  children: React.ReactNode
}

const FavouriteContext = createContext<FavouriteContextType>(defaultFavouriteContextValue)

export const useFavouriteContext = () => {
  return useContext(FavouriteContext)
}

export default function FavouriteProvider({ children }: FavouriteProviderProps) {
  const [user, setUser] = useState<string>('')
  const [favourite, setFavourites] = useState<any[]>([])

  const fetchFavourites = async() => {
    try {
      if(!user) setNewUser()
      const favouritesResponse = (await axios.get('/favourites'))
    } catch (error) {
      console.error('Error on searching favourites:', error)
    }
  }

  const setNewUser = () => {
    setUser('') //remover, fica salvo na api-key
  }

  return (
    <FavouriteContext.Provider value={{ user, setUser, favourites, setFavourites }}>
      {children}
    </FavouriteContext.Provider>
  )
}