"use client"

import axios from '../../api/axiosConfig'
import { createContext, useContext, useEffect, useState } from "react";
import { Cat } from '../types/Cat';
import { Category } from '../types/Category';

interface ImagesContextType {
  images: Cat[]
  setImages: (images: Cat[]) => void
  filter: Filters
  setFilter: (filters: Filters) => void
  categories: Category[],
  setCategories: (categories: Category[]) => void
}

const defaultContextValue: ImagesContextType = {
  images: [],
  setImages: () => {},
  filter: {
    category_ids: null,
    breed_ids: null,
    has_breeds: 0,
    sub_id: null,
    limit: 12,
    page: 0,
    order: 'RAND'
  },
  setFilter: () => {},
  categories: [],
  setCategories: () => {},
}

interface ImageProviderProps {
  children: React.ReactNode
}

export interface Filters {
  category_ids: string | null
  breed_ids: string | null
  has_breeds: 1 | 0
  sub_id: string | null
  limit: number
  page: number
  order: 'ASC' | 'DESC' | 'RAND'
}

const ImagesContext = createContext<ImagesContextType>(defaultContextValue)

export const useImagesContext = () => {
  return useContext(ImagesContext)
}

export default function ImageProvider({ children }: ImageProviderProps) {
  const [images, setImages] = useState<Cat[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [filter, setFilter] = useState<Filters>(defaultContextValue.filter)

  const fetchImages = async () => {
    try {
      const params = Object.entries(filter || {}).reduce((acc: { [key: string]: unknown }, [key, value]) => {
        if (value != null) {
          acc[key] = value
        }
        return acc
      }, {})

      if (Object.keys(params).length === 0) {
        return;
      }

      const response = (await axios.get('/images/search', { params })).data
      setImages(response)
    } catch (error) {
      console.error('Error on searching images:', error)
    }
  }

  const fetchCategories = async () => {
    try {
      const storedCategories = localStorage.getItem('categories')
      if(storedCategories) {
        setCategories(JSON.parse(storedCategories))
        return
      }
      const response = (await axios.get('/categories')).data
      setCategories(response)
      localStorage.setItem('categories', JSON.stringify(response))
    } catch (error) {
      console.error('Error on searching categories:', error)
    }
  }

  useEffect(() => {
    if(filter) fetchImages()
  }, [filter])

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <ImagesContext.Provider value={{ images, setImages, filter, setFilter, categories, setCategories }}>
      {children}
    </ImagesContext.Provider>
  )
}