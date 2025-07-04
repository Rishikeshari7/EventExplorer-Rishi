import Link from "next/link"
import { MapPin, Users, Clock, ArrowRight, Bookmark } from "lucide-react"
import {Badge} from "@/components/ui/badge"
import Card from "./card"
import type { Event } from "@/types/event"

interface EventCardProps {
  event: Event
  viewMode?: "grid" | "list"
}

export default function EventCard({ event, viewMode = "grid" }: EventCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          {/* Date Badge */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex flex-col items-center justify-center text-white">
              <div className="text-xs font-medium uppercase">
                {new Date(event.date).toLocaleDateString("en", { month: "short" })}
              </div>
              <div className="text-xl font-bold">{new Date(event.date).getDate()}</div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {event.category}
                </Badge>
                <h3 className="font-poppins text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {event.title}
                </h3>
              </div>
              <button className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{event.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {event.time}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {event.location}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {event.attendees}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {event.isPaid ? `₹${event.price}` : "Free"}
              </div>
              <Link href={`/events/${event.id}`}>
                <button className="bg-violet-600 hover:bg-violet-700 text-white shadow-sm hover:shadow-md px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Header with gradient */}
      <div className="h-48 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <Badge className="bg-white/90 text-gray-900 hover:bg-white">{event.category}</Badge>
          <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center">
            <Bookmark  className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white/90 text-sm mb-1">{event.day}</div>
          <div className="text-white text-2xl font-bold">{event.date}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-poppins text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2">
          {event.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{event.description}</p>

        {/* Event Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4 mr-3 text-violet-500" />
            <span>
              {event.time} • {event.duration}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4 mr-3 text-violet-500" />
            <span>
              {event.venue}, {event.location}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Users className="w-4 h-4 mr-3 text-violet-500" />
            <span>{event.attendees} expected</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {event.isPaid ? `₹${event.price}` : "Free"}
          </div>
          <Link href={`/events/${event.id}`}>
            <button className="bg-violet-600 hover:bg-violet-700 text-white shadow-sm hover:shadow-md px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center group-hover:shadow-lg">
              View Details
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
