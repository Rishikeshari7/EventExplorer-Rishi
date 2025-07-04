import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Users, Clock, Share2, Bookmark, Star } from "lucide-react"
import {Badge} from "@/components/ui/badge"
import Card from "@/components/card"
import Navbar from "@/components/navbar"
import { events } from "@/data/events"

interface EventPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }))
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { id } = await params
  const event = events.find((e) => e.id.toString() === id)

  if (!event) {
    return { title: "Event Not Found" }
  }

  return {
    title: `${event.title} - EventHub`,
    description: event.description,
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params
  const event = events.find((e) => e.id.toString() === id)

  if (!event) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="relative h-96 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8">
            <div className="text-white">
              <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Events
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-white/20 text-white border-white/30">{event.category}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">4.8 (124 reviews)</span>
                </div>
              </div>
              <h1 className="font-poppins text-4xl lg:text-5xl font-bold mb-4">{event.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {event.date} • {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {event.venue}, {event.location}
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  {event.attendees} expected
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card className="p-8">
                <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-6">About This Event</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{event.fullDescription}</p>

                {event.highlights && (
                  <>
                    <h3 className="font-poppins text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      What You'll Get
                    </h3>
                    <ul className="space-y-3">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Card>

              {/* Organizer */}
              <Card className="p-8">
                <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-6">Event Organizer</h2>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {event.organizer.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{event.organizer}</h3>
                    <p className="text-gray-600 dark:text-gray-400">Event Organizer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{event.contact}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <Card className="p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {event.isPaid ? `₹${event.price}` : "Free"}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">per person</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-violet-500 mr-3" />
                      <span className="text-gray-600 dark:text-gray-400">Date</span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{event.date}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-violet-500 mr-3" />
                      <span className="text-gray-600 dark:text-gray-400">Time</span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{event.time}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-violet-500 mr-3" />
                      <span className="text-gray-600 dark:text-gray-400">Attendees</span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{event.attendees}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-violet-600 hover:bg-violet-700 text-white shadow-sm hover:shadow-md py-3 text-lg font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center">
                    {event.isPaid ? `Register for ₹${event.price}` : "Register for Free"}
                  </button>
                  <div className="flex gap-3">
                    <button className="flex-1 border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save
                    </button>
                    <button className="flex-1 border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
