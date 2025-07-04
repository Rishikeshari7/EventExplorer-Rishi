"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import EventsSection from "@/components/events-section"
import Navbar from "@/components/navbar"
import { events } from "@/data/events"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <Navbar onSearch={setSearchQuery} searchQuery={searchQuery} />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <HeroSection />
        <EventsSection events={events} searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      </main>
    </>
  )
}
