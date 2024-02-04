import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  if (data.isError) return <div>{data.message}</div>;
  const events = data.events;
  return <>{<EventsList events={events} />}</>;
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Failed to fetch events", status: 500 })
    );
  } else {
    return response;
  }
}

export default EventsPage;
