'use client';
import Filter from "./components/filter/Filter";
import MainGrid from "./components/grid/MainGrid";
import Profile from "./components/profile/Profile";

export default function Home() {

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 xl:max-w-screen-xl w-full">
      <Profile />
      <Filter />
      <MainGrid />
    </div>
  );
}
