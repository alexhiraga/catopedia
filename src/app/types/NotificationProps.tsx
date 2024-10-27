import { NotificationTypesEnum } from "../enums/NotificationTypesEnum";

export interface NotificationProps {
  type: NotificationTypesEnum
  message: string
}