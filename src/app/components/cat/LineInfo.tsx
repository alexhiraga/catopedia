interface LineInfoProps {
  label: string
  description: string | number
}

export default function LineInfo({ label, description }: LineInfoProps) {
  if(!description) return
  return (
    <div className="px-4">
      <div className="flex gap-2 flex-col xl:flex-row mb-2 xl:mb-0 xl:items-baseline">
        <label className="font-semibold">{label}:</label>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  )
}