"use client"

import { createContext, useContext, useState } from "react";
import { NotificationTypesEnum } from "../enums/NotificationTypesEnum";
import { NotificationProps } from "../types/NotificationProps";
import Notification from "../components/notification/Notification";

interface NotificationContextProps {
  showNotification: (type: NotificationTypesEnum, message: string) => void
}

const NotificationContext = createContext<NotificationContextProps | null>(null)

interface NotificationProviderProps {
  children: React.ReactNode
}

export default function NotificationProvider({ children }: NotificationProviderProps) {
  const [notification, setNotification] = useState<NotificationProps | null>()

  function showNotification(type: NotificationTypesEnum, message: string): void {
    if(!type) return
    setNotification({ type, message })
    setTimeout(() => setNotification(null), 8000)
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && <Notification type={notification.type} message={notification.message} />}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error("Error on using Notification component")
  }
  return context
}