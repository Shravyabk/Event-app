import Link from "next/link";
import './HomePage.css'; // Make sure to create this CSS file

export default function HomePage() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="heading"> Welcome to Event App</h1>
        <p className="subheading">Manage events and RSVP easily.</p>
        <Link href="/events">
          <button className="btn">View Events →</button>
        </Link>
      </div>
    </div>
  );
}
