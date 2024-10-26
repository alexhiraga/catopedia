interface LineInfoProps {
  label: string
  description: string | number
}

export default function LineInfo({ label, description }: LineInfoProps) {
  if(!description) return
  return (
    <div className="px-4">
      <div className="flex gap-2">
        <label className="font-semibold">{label}:</label>
        <div>{description}</div>
      </div>
    </div>
  )
}