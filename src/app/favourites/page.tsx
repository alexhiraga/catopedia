import FavouritesGrid from "../components/grid/FavouritesGrid";
import Profile from "../components/profile/Profile";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FavouritesPage() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 xl:max-w-screen-xl w-full">
      <Profile />
      <div className="border-t-[1px] pt-1 border-darkBackground dark:border-lightBackground xl:w-[1220px] mb-10">
        <div className="pt-2 flex flex-wrap justify-center items-center gap-2 ">
          <FavoriteIcon fontSize="inherit" />
          Favourites
        </div>
      </div>
      <FavouritesGrid />
    </div>
  )
}