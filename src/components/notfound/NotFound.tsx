import Image from "next/image"
import sadcat from '/public/assets/sadcat.png'

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center gap-4 text-center">
      <div>
        <Image
          className="m-auto"
          src={sadcat}
          alt="Logo"
          width={300}
          height={300}
          layout="intrinsic"
        />
      </div>
      <span>
        404 | Not found
      </span>
    </div>
  )
}