"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import "./Events.css"; // import the CSS file

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("events").select("*");
      if (error) console.error("Error fetching events:", error);
      else setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="events-container">
      <h1>📅 Events</h1>
      <ul className="events-list">
        {events.map((event) => (
          <li key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p className="event-meta">
              📍 {event.city} | 🗓 {event.date}
            </p>
            <Link href={`/rsvp/${event.id}`} className="rsvp-btn">
              RSVP →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
