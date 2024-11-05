import Image from 'next/image'
import favicon from '../../app/favicon.ico'

export default function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center gap-4">
      <div>
        <Image
          className="rounded-full m-auto"
          src={favicon}
          alt="Logo"
          width={60}
          height={60}
          layout="intrinsic"
        />
      </div>
      <span className="text-sm">
        Loading...
      </span>
    </div>
  )
}