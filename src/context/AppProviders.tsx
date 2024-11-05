import FavouriteProvider from "./FavouriteContext"
import ImageProvider from "./ImagesContext"
import UserModalProvider from "./modal/UserModalContext"
import NotificationProvider from "./NotificationContext"

interface AppProvidersProps {
  children: React.ReactNode
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <UserModalProvider>
      <NotificationProvider>
        <FavouriteProvider>
          <ImageProvider>
            {children}
          </ImageProvider>
        </FavouriteProvider>  
      </NotificationProvider>
    </UserModalProvider>
  )
}