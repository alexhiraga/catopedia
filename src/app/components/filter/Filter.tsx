"use client"

import { useEffect, useState } from "react"
import { Category } from '../../types/Category'
import ButtonFilter from "./button/ButtonFilter"
import { useImagesContext } from "@/app/context/ImagesContext"

const categories: Category[] = [
  {
    "id": 5,
    "name": "boxes"
  },
  {
    "id": 15,
    "name": "clothes"
  },
  {
    "id": 1,
    "name": "hats"
  },
  {
    "id": 14,
    "name": "sinks"
  },
  {
    "id": 2,
    "name": "space"
  },
  {
    "id": 4,
    "name": "sunglasses"
  },
  {
    "id": 7,
    "name": "ties"
  }
]

export default function Filter() {

  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])

  const { setFilter } = useImagesContext()

  function handleFilterChange(category: Category) {
    setSelectedCategories(previous => {
      const updatedCategories = previous.some(selected => selected.id === category.id)
        ? previous.filter(selected => selected.id !== category.id)
        : [...previous, category]

      return updatedCategories
    })
  }

  useEffect(() => {
    setFilter(selectedCategories.map(category => category.id).join(','))
  }, [selectedCategories, setFilter])

  return (
    <div className="mb-10">
      <div className="flex flex-wrap gap-4">
        {categories.map(category => {
          const isSelected = selectedCategories.some(selected => selected.id === category.id)
          return (
            <div key={category.id}>
              <ButtonFilter onClick={() => handleFilterChange(category)} isActive={isSelected}>
                {category.name}
              </ButtonFilter>
            </div>
          )
        })}
      </div>
    </div>
  )
}