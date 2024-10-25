"use client"

import axios from '../../api/axiosConfig'
import { createContext, useContext, useEffect, useState } from "react";
import { Images } from '../types/Images';

interface ImagesContextType {
  images: Images[]
  setImages: (images: Images[]) => void
  filter: string | null
  setFilter: (filter: string | null) => void
}

const defaultContextValue: ImagesContextType = {
  images: [],
  setImages: () => {},
  filter: null,
  setFilter: () => {}
}

interface ImageProviderProps {
  children: React.ReactNode
}

const ImagesContext = createContext<ImagesContextType>(defaultContextValue)

export const useImagesContext = () => {
  return useContext(ImagesContext)
}

export default function ImageProvider({ children }: ImageProviderProps) {
  const [images, setImages] = useState<Images[]>([])
  const [filter, setFilter] = useState<string | null>(null)

  const fetchImages = async () => {
    try {
      console.log('images', images)
      console.log("filter', ", filter)
      // const response = await axios.get('/')
      // setImages(response.data)
    } catch (error) {
      console.error('Error on searching images:', error)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [filter])

  return (
    <ImagesContext.Provider value={{ images, setImages, filter, setFilter }}>
      {children}
    </ImagesContext.Provider>
  )
}