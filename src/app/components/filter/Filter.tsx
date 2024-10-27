"use client"

import { useEffect, useState } from "react"
import { Category } from '../../types/Category'
import ButtonFilter from "./button/ButtonFilter"
import { Filters, useImagesContext } from "@/app/context/ImagesContext"
import ToggleButtonFilter from "./button/ToggleButtonFilter"
import AssignmentIcon from '@mui/icons-material/Assignment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from "next/link"

export default function Filter() {

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [hasBreed, setHasBreed] = useState<1 | 0>(0)

  const { setFilter, categories } = useImagesContext()

  function handleFilterChange(category: Category): void {
    if(selectedCategory?.id === category.id) {
      setSelectedCategory(null)
      return
    }
    setSelectedCategory(category)
  }

  function toggleHasBreed(): void {
    if(hasBreed === 1) {
      setHasBreed(0)
    } else {
      setHasBreed(1)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setFilter((prevFilter: Filters) => {
      return ({
        ...prevFilter,
        category_ids: selectedCategory?.id,
        has_breeds: hasBreed
      })
    })
  }, [selectedCategory, setFilter, hasBreed ])
  
  return (
    <div className="mb-10 ">
      <div className="flex flex-wrap gap-4 mb-10 justify-center">
        {categories.map(category => {
          const isSelected = selectedCategory?.id === category.id
          return (
            <div key={category.id}>
              <ButtonFilter onClick={() => handleFilterChange(category)} isActive={isSelected}>
                {category.name}
              </ButtonFilter>
            </div>
          )
        })}
      </div>

      <div className="border-t-[1px] pt-1 border-darkBackground dark:border-lightBackground xl:w-[1220px] flex flex-wrap justify-center">
        <ToggleButtonFilter onClick={() => toggleHasBreed()} isActive={hasBreed === 1}>
          <AssignmentIcon fontSize="inherit" />
          Breed
        </ToggleButtonFilter>
        <Link href="/favourites">
          <ToggleButtonFilter>
            <FavoriteIcon fontSize="inherit" />
            Favourites
          </ToggleButtonFilter>
        </Link>
      </div>
    </div>
  )
}