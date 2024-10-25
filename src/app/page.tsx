import Filter from "./components/filter/Filter";
import Grid from "./components/grid/Grid";
import Profile from "./components/profile/Profile";
import ImageProvider from "./context/ImagesContext";

export default function Home() {
  
  return (
    <ImageProvider>
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 xl:max-w-screen-xl w-full">
        <Profile />
        <Filter />
        <Grid />
      </div>
    </ImageProvider>
  );
}
