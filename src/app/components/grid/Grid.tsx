import Image from "next/image"

const images = [
  {
    "id": "2ph",
    "url": "https://cdn2.thecatapi.com/images/2ph.gif",
    "width": 500,
    "height": 333
  },
  {
    "id": "6tv",
    "url": "https://cdn2.thecatapi.com/images/6tv.jpg",
    "width": 3872,
    "height": 2592
  },
  {
    "id": "9bp",
    "url": "https://cdn2.thecatapi.com/images/9bp.jpg",
    "width": 640,
    "height": 426
  },
  {
    "id": "9l7",
    "url": "https://cdn2.thecatapi.com/images/9l7.jpg",
    "width": 500,
    "height": 332
  },
  {
    "id": "aef",
    "url": "https://cdn2.thecatapi.com/images/aef.jpg",
    "width": 375,
    "height": 500
  },
  {
    "id": "dui",
    "url": "https://cdn2.thecatapi.com/images/dui.jpg",
    "width": 2592,
    "height": 1456
  },
  {
    "id": "eie",
    "url": "https://cdn2.thecatapi.com/images/eie.jpg",
    "width": 1599,
    "height": 1200
  },
  {
    "id": "MTUzNzkyNw",
    "url": "https://cdn2.thecatapi.com/images/MTUzNzkyNw.jpg",
    "width": 720,
    "height": 960
  },
  {
    "id": "MTY0Njk3MQ",
    "url": "https://cdn2.thecatapi.com/images/MTY0Njk3MQ.jpg",
    "width": 400,
    "height": 426
  },
  {
    "id": "MTY4MjUxMA",
    "url": "https://cdn2.thecatapi.com/images/MTY4MjUxMA.png",
    "width": 650,
    "height": 433
  }
]

export default function Grid() {
  return (
    <div className="border-t-[1px] pt-10 border-darkBackground dark:border-lightBackground">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {images.map(image => {
          return (
            <div key={image.id} className="relative">
              <Image
                src={image.url}
                alt={`Image ${image.id}`}
                objectFit="cover"
                width={400}
                height={400}
                className="aspect-square object-cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}