import { Cat } from "./Cat"

export interface Favourite {
  id?: number
  user_id?: string 
  image_id?: string
  sub_id?: string
  created_at?: Date
  image?: Cat
}