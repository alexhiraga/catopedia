"use client"

import { useFavouriteContext } from "@/context/FavouriteContext"
import { useNotification } from "@/context/NotificationContext"
import { NotificationTypesEnum } from "@/enums/NotificationTypesEnum"
import { useState } from "react"
import { Tooltip } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Cat } from "@/types/Cat";

interface ActionsBarProps {
  cat: Cat
}

export default function ActionsBar({ cat }: ActionsBarProps) {
  const [hoverHeart, setHoverHeart] = useState<boolean>(false)
  const { addFavourite } = useFavouriteContext()
  const { showNotification } = useNotification()

  function favoriteImage(): void {
    addFavourite({image_id: cat.id})
  }

  function copyUrl():void {
    if(!cat) {
      return showNotification(NotificationTypesEnum.DANGER, 'Error on copying url')
    }
    navigator.clipboard.writeText(cat.url)
    return showNotification(NotificationTypesEnum.INFO, 'Url copied to clipboard!')
  }
  return (
    <div className="flex gap-2">
      <div
        onMouseEnter={() => setHoverHeart(true)}
        onMouseLeave={() => setHoverHeart(false)}
      >
        {hoverHeart ? (
          <Tooltip title="Favorite image">
            <FavoriteIcon className="text-red-500 cursor-pointer" onClick={favoriteImage} />
          </Tooltip>
        ) : (
          <FavoriteBorderIcon />
        )}
      </div>
      <Tooltip title="Copy to clipboard">
        <ContentCopyIcon onClick={copyUrl} className="cursor-pointer hover:brightness-200 transition-all"/>
      </Tooltip>
    </div>
  )
}