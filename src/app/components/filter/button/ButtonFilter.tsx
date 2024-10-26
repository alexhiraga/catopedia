import { ButtonFilterProps } from "@/app/types/ButtonFilterProps"
import React from "react"

export default function ButtonFilter({ isActive, onClick, children }: ButtonFilterProps) {
  return (
    <button 
      className={`capitalize cursor-pointer rounded-full text-sm py-2 px-6 border-[1px] border-darkBackground dark:border-lightBackground
        ${isActive ? 'font-bold text-darkText bg-darkBackground dark:bg-lightBackground dark:text-lightText' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}