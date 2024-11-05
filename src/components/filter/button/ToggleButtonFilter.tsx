import { ButtonFilterProps } from "@/types/ButtonFilterProps";

export default function ToggleButtonFilter({ isActive, onClick, children }: ButtonFilterProps) {
  return (
    <button 
      className={`capitalize cursor-pointer text-xs py-2 px-6 flex gap-2 items-center hover:backdrop-brightness-150 transition-all
        ${isActive ? 'font-bold backdrop-brightness-150' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}