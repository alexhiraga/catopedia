import { useImagesContext } from "@/context/ImagesContext";
import Grid from "./Grid";
import InfiniteScroll from "react-infinite-scroll-component";

export default function MainGrid() {
  const { images, fetchImages, hasMore } = useImagesContext()

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={hasMore}
      loader={<h4 className="flex flex-row justify-center my-10">Loading...</h4>}
    >
      <Grid images={images} />
    </InfiniteScroll>
  )
}