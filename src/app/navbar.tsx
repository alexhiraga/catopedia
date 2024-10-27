import Image from "next/image";
import DarkModeSwitch from "./components/DarkModeSwitch";
import favicon from './favicon.ico'
import NavbarIcon from "./components/navbar/NavbarIcon";
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
  return (
    <div className="border-gray-400 fixed p-3 dark:bg-darkBackground z-10 bg-lightBackground text-lightText dark:text-darkText
      w-full h-14 bottom-0 border-t-[1px] text-center m-auto  flex flex-row gap-6 justify-between
      md:w-20 md:h-full left-0 md:border-r-[1px] md:flex-col md:py-6
      xl:w-60 xl:h-full xl:text-left xl:p-7">
      <div className="flex flex-row justify-between md:flex-col md:justify-start w-1/2 md:w-auto">
        <div className="md:mb-20 flex gap-2 items-center">
          <Image 
            className="w-10 md:w-full"
            src={favicon}
            alt="Logo"
            width={60}
            height={60}
          />
          <h2 className="text-lg font-semibold invisible  xl:visible">Catopedia</h2>
        </div>
        <div className="flex flex-row md:flex-col gap-4">
          <NavbarIcon href="/">
            <HomeIcon fontSize="large" />
            <div className="hidden xl:block">Home</div>
          </NavbarIcon>
          <NavbarIcon href="/favourites">
            <FavoriteIcon fontSize="large" />
            <div className="hidden xl:block">Favourites</div>
          </NavbarIcon>
        </div>
      </div>
      <div>
        <DarkModeSwitch />
      </div>
    </div>
  )
}