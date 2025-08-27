"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useParams } from "next/navigation";
import "./RSVPPage.css";

export default function RSVPPage() {
  const { id } = useParams();
  const [status, setStatus] = useState("Yes");
  const [userId, setUserId] = useState(""); // replace with logged-in user later
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("rsvps").insert([
      {
        user_id: userId || "67ed7404-1af6-4909-9d25-f80b7efbef0a", // temp user
        event_id: id,
        status,
      },
    ]);

    if (error) setMessage("❌ Error saving RSVP");
    else setMessage("✅ RSVP saved successfully!");
  };

  return (
    <div className="rsvp-container">
      <div className="rsvp-card">
        <h1>RSVP for Event</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Select your response:
            <br />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Maybe">Maybe</option>
            </select>
          </label>
          <br />
          <button type="submit">Submit RSVP</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
