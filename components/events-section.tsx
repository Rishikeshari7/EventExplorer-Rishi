"use client"

import { useState, useMemo } from "react"
import { Grid, List, X } from "lucide-react"
import Select from "./select"
import EventCard from "./event-card"
import {Badge} from "@/components/ui/badge"
import type { Event } from "@/types/event"
interface EventsSectionProps {
  events: Event[]
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

export default function EventsSection({ events, searchQuery = "", onSearchChange }: EventsSectionProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("date")
  const [filterCategory, setFilterCategory] = useState("all")

  const categories = ["all", ...new Set(events.map((event) => event.category))]

  const categoryOptions = categories.map((cat) => ({
    value: cat,
    label: cat === "all" ? "All Categories" : cat,
  }))

  const sortOptions = [
    { value: "date", label: "Date" },
    { value: "price", label: "Price" },
    { value: "title", label: "Name" },
  ]

  const filteredAndSortedEvents = useMemo(() => {
    return events
      .filter((event) => {
        // Search filter
        const matchesSearch =
          searchQuery === "" ||
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.category.toLowerCase().includes(searchQuery.toLowerCase())

        // Category filter
        const matchesCategory = filterCategory === "all" || event.category === filterCategory

        return matchesSearch && matchesCategory
      })
      .sort((a, b) => {
          if (sortBy === "date") return a.date.localeCompare(b.date)
          if (sortBy === "price") return (a.price || 0) - (b.price || 0)
        return a.title.localeCompare(b.title)
      })
  }, [events, searchQuery, filterCategory, sortBy])

  const clearSearch = () => {
    if (onSearchChange) {
      onSearchChange("")
    }
  }

  const clearCategory = () => {
    setFilterCategory("all")
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Discover amazing events happening near you</p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-6 lg:mt-0">
          {/* Category Filter */}
          <Select options={categoryOptions} value={filterCategory} onChange={setFilterCategory} className="w-40" />

          {/* Sort */}
          <Select options={sortOptions} value={sortBy} onChange={setSortBy} className="w-32" />

          {/* View Toggle */}
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center ${
                viewMode === "grid"
                  ? "bg-violet-600 hover:bg-violet-700 text-white shadow-sm hover:shadow-md"
                  : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center ${
                viewMode === "list"
                  ? "bg-violet-600 hover:bg-violet-700 text-white shadow-sm hover:shadow-md"
                  : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {(searchQuery || filterCategory !== "all") && (
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-sm text-gray-600 dark:text-gray-400">Active filters:</span>
          {searchQuery && (
            <Badge
              variant="secondary"
              className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={clearSearch}
            >
              Search: "{searchQuery}" <X className="w-3 h-3 ml-1" />
            </Badge>
          )}
          {filterCategory !== "all" && (
            <Badge
              variant="secondary"
              className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={clearCategory}
            >
              Category: {filterCategory} <X className="w-3 h-3 ml-1" />
            </Badge>
          )}
        </div>
      )}

      {/* Results Count */}
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-400">
          {searchQuery ? (
            <>
              Showing {filteredAndSortedEvents.length} results for "{searchQuery}"
            </>
          ) : (
            <>
              Showing {filteredAndSortedEvents.length} of {events.length} events
            </>
          )}
        </p>
      </div>

      {/* Events Grid/List */}
      {filteredAndSortedEvents.length > 0 ? (
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" : "space-y-6"}>
          {filteredAndSortedEvents.map((event, index) => (
            <div
              key={event.id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <EventCard event={event} viewMode={viewMode} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
            <Grid className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">No events found</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
            {searchQuery ? (
              <>No events match your search for "{searchQuery}". Try different keywords or clear your search.</>
            ) : (
              <>Try adjusting your filters to discover amazing events happening near you.</>
            )}
          </p>
          {(searchQuery || filterCategory !== "all") && (
            <div className="flex justify-center gap-3">
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
                >
                  Clear Search
                </button>
              )}
              {filterCategory !== "all" && (
                <button
                  onClick={clearCategory}
                  className="border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
