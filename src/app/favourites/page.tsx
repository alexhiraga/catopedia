"use client"

import { useState } from "react";
import ToggleButtonFilter from "../../components/filter/button/ToggleButtonFilter";
import FavouritesGrid from "../../components/grid/FavouritesGrid";
import Profile from "../../components/profile/Profile";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FavouritesPage() {
  const [showMyFavourites, setShowMyFavourites] = useState<boolean>(true)

  function toggleShowMyFavourites(): void {
    setShowMyFavourites(!showMyFavourites)
  }

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 xl:max-w-screen-xl w-full">
      <Profile />
      <div className="border-t-[1px] pt-1 border-darkBackground dark:border-lightBackground xl:w-[1220px] mb-10 flex flex-wrap justify-center">
        <ToggleButtonFilter onClick={() => toggleShowMyFavourites()} isActive={showMyFavourites}>
          <FavoriteIcon fontSize="inherit" />
          {showMyFavourites ? 'Show all favourites' : 'Show only my favourites'}
        </ToggleButtonFilter>
      </div>
      <FavouritesGrid showMyFavourites={showMyFavourites} />
    </div>
  )
}