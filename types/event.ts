export interface Event {
  id: number
  title: string
  description: string
  fullDescription: string
  date: string
  day: string
  time: string
  duration: string
  location: string
  venue: string
  category: string
  isPaid: boolean
  price?: number
  attendees: string
  organizer: string
  contact: string
  highlights?: string[]
}
