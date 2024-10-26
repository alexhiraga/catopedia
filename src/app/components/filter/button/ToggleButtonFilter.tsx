import { ButtonFilterProps } from "@/app/types/ButtonFilterProps";

export default function ToggleButtonFilter({ isActive, onClick, children }: ButtonFilterProps) {
  return (
    <button 
      className={`capitalize cursor-pointer text-xs py-2 px-6 flex gap-2 items-center
        ${isActive ? 'font-bold backdrop-brightness-150' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}