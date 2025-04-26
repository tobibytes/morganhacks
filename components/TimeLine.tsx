'use client'

import {MapPin, Clock, Users } from 'lucide-react'


export interface ScheduleEvent {
  time: string
  item: string
  responsibility?: string
  venue?: string
}

export interface DaySchedule {
  date: string
  events: ScheduleEvent[]
}

export interface ScheduleData {
  day1: DaySchedule
  day2: DaySchedule
  fun: string[]
}
const schedule: ScheduleData = {
  day1: {
    date: "Saturday, April 26th, 2025",
    events: [
      { time: "6:00 AM", item: "Organizers Arrive", responsibility: "All Teams" },
      { time: "7:00 AM", item: "Volunteers Arrive / Logistics / Registration", responsibility: "Operations Team" },
      { time: "8:00 AM – 10:30 AM", item: "Check-in, Breakfast & Network with Sponsors", responsibility: "Registration & Volunteer Team", venue: "First Floor" },
      { time: "9:00 AM – 10:30 AM", item: "Sponsorship Fair", responsibility: "Sponsors" },
      { time: "10:30 AM – 11:30 AM", item: "Opening Ceremony, President Address, Keynote, Panel", responsibility: "All Teams + Guests", venue: "Auditorium: 104" },
      { time: "11:30 AM – 12:15 PM", item: "Hackathon Breakdown & Challenge Statement", responsibility: "All Teams", venue: "Auditorium: 104" },
      { time: "12:30 PM", item: "Coding Begins", venue: "Study Rooms" },
      { time: "1:00 PM – 2:00 PM", item: "Workshop 1 – Northrop Grumman: A Day in the Life of an Engineer Panel with Yeneneh Ketema, MLH workshop ", responsibility: "Northrop Grumman", venue: "Room 112, Room 208 " },
      { time: "1:00 PM – 3:00 PM", item: "Lunch Served", responsibility: "Logistics / Volunteers", venue: "First Floor" },
      { time: "4:00 PM – 5:00 PM", item: "Workshop – Northrop Grumman: Building Your Web App with Python, Flask, and NodeJS", responsibility: "Northrop Grumman", venue: "Room 208" },
      { time: "4:00 PM – 5:00 PM", item: "Workshop – Wells Fargo: Speaking with Influence: Crafting a Memorable Pitch", responsibility: "Wells Fargo", venue: "Room 316" },
      { time: "4:00 PM – 5:00 PM", item: "Workshop – Microsoft: CTF Workshop for MorganHacks using KC7Cyber Platform", responsibility: "Microsoft", venue: "Room 112" },
      { time: "5:00 PM – 8:00 PM", item: "Dinner Served", responsibility: "Logistics / Volunteers", venue: "First Floor" },
      { time: "All Day", item: "Snacks Available", venue: "First Floor" },
    ],
  },
  day2: {
    date: "Sunday, April 27th, 2025",
    events: [
      { time: "8:00 AM – 10:00 AM", item: "Breakfast Served", responsibility: "Logistics / Volunteers", venue: "First Floor" },
      { time: "11:00 AM", item: "Pitch Practice", responsibility: "Mentors", venue: "Study Rooms" },
      { time: "12:00 PM", item: "Lunch Served", responsibility: "Logistics / Volunteers", venue: "First Floor" },
      { time: "1:00 PM", item: "Submission Deadline", venue: "Devpost" },
      { time: "1:30 PM – 3:30 PM", item: "Round 1 Judging", responsibility: "Judges", venue: "Judging Rooms" },
      { time: "3:45 PM", item: "Start of Closing Ceremony & Top 6 Teams Announced", venue: "Auditorium: 104" },
      { time: "3:50 PM – 4:00 PM", item: "Top 6 Teams Final Pitch Practice" },
      { time: "4:00 PM – 5:00 PM", item: "Round 2 Judging", responsibility: "Everyone", venue: "Auditorium: 104" },
      { time: "5:05 PM – 5:15 PM", item: "Resume Closing Ceremony", responsibility: "Judges", venue: "Breakout Room" },
      { time: "5:15 PM – 5:45 PM", item: "Winners Announced" },
      { time: "5:45 PM – 6:30 PM", item: "Networking Drinks & Dinner" },
    ],
  },
  fun: [
    "Scavenger Hunts",
    "Puzzle Games",
    "Karaoke ✅",
    "Charades",
    "Icebreakers (We're Not Really Strangers) ✅",
    "Cup Stack"
  ]
};


export default function EventSchedule() {
  return (
    <section className="py-20 bg-[#0e0e17] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl font-extrabold mb-16 text-purple-400">MorganHacks Schedule</h2>

        {(['day1', 'day2'] as const).map((key, idx) => {
          const label = key === 'day1' ? 'Day 1' : 'Day 2'
          const day = schedule[key]

          return (
            <div key={idx} className="mb-24">
              <h3 className="text-2xl font-bold text-blue-400 mb-8 border-l-4 border-blue-500 pl-4">{label} • {day.date}</h3>

              <div className="relative">
                {/* Vertical center line */}
                <div className="absolute left-1/2 top-0 h-full w-[2px] bg-purple-600/20 -translate-x-1/2 z-0" />

                <div className="grid md:grid-cols-2 gap-y-12 gap-x-6 relative z-10">
                  {day.events.map((event, i) => (
                    <div key={i} className={`relative p-5 rounded-xl bg-[#181825] border border-white/10 shadow-md`}>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-bold text-green-300">{event.item}</h4>
                          <span className="text-sm text-yellow-300 flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </span>
                        </div>

                        {event.responsibility && (
                          <div className="text-sm text-white/80 flex items-center gap-1">
                            <Users className="w-4 h-4 text-white/50" />
                            {event.responsibility}
                          </div>
                        )}

                        {event.venue && (
                          <div className="text-sm text-white/80 flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-white/50" />
                            {event.venue}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}

        {/* Redesigned Fun Activities */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-pink-400 mb-6 text-center">🎉 Fun Activities</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {schedule.fun.map((activity, i) => (
              <div
                key={i}
                className="bg-[#1e1e2a] border border-white/10 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all"
              >
                <p className="text-white/90 font-medium text-sm">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}